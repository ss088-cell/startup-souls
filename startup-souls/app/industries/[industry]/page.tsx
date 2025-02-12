"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustryPage() {
  const { industry } = useParams();
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState<number | null>(null); // Tracks the expanded startup

  useEffect(() => {
    async function fetchStartupData() {
      try {
        console.log(`Fetching data for industry: ${industry}`);
        const response = await fetch(`/api/startup?industry=${industry}`);
        if (!response.ok) throw new Error("Failed to fetch startup data");
        const result = await response.json();
        setStartups(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchStartupData();
  }, [industry]);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Centered Heading */}
      <div className="w-full flex justify-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800">Agriculture Startups</h1>
      </div>

      {/* Grid Layout - One Startup Per Row */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-3xl mt-12">
        {startups.map((startup) => (
          <motion.div
            key={startup.id}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer flex flex-col items-center w-full relative"
            whileHover={{ scale: 1.05 }}
            onClick={() => setExpandedId(expandedId === startup.id ? null : startup.id)}
          >
            {/* Logo Centered */}
            <div className="flex justify-center w-full mt-6">
              <Image
                src={startup.logo}
                alt="Startup Logo"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>

            {/* Expandable Details */}
            {expandedId === startup.id && (
              <motion.div
                className="mt-4 bg-gray-100 p-4 rounded-lg w-full text-left relative"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p><strong>Funding:</strong> {startup.funding}</p>
                <p><strong>Market:</strong> {startup.market}</p>
                <p><strong>Growth:</strong> {startup.growth}</p>
                <p><strong>Revenue:</strong> {startup.revenue}</p>
                <p><strong>Innovation:</strong> {startup.innovation}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
