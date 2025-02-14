"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer from "../../components/Footer"; // Correct import path for Footer

export default function IndustryPage() {
  const { industry } = useParams();
  const router = useRouter();
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [selectedStartup, setSelectedStartup] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStartups, setFilteredStartups] = useState([]);
  const [cityQuery, setCityQuery] = useState("");
  const [cityStartups, setCityStartups] = useState([]);
  const [cityPopupOpen, setCityPopupOpen] = useState(false);

  useEffect(() => {
    async function fetchStartupData() {
      try {
        console.log(`Fetching data for industry: ${industry}`);
        const response = await fetch(`/api/startup?industry=${industry}`);
        if (!response.ok) throw new Error("Failed to fetch startup data");
        const result = await response.json();
        setStartups(result);
        setFilteredStartups(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchStartupData();
  }, [industry]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredStartups(startups);
    } else {
      const filtered = startups.filter((startup) =>
        startup.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStartups(filtered);
    }
  }, [searchQuery, startups]);

  const searchCityStartups = () => {
    if (!cityQuery.trim()) return;

    const foundStartups = startups.filter(
      (startup) => startup.city?.toLowerCase() === cityQuery.toLowerCase()
    );

    setCityStartups(foundStartups);
    setCityPopupOpen(true); // Open the city popup
  };

  const handleSearchButtonClick = () => {
    const filtered = startups.filter((startup) =>
      startup.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStartups(filtered);
  };

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  const categories = {
    b2b: "Services to Business (B2B)",
    b2c: "Services to Direct Customer (B2C)",
    both: "Services to Both (B2B and B2C)",
    international: "Services to International Markets",
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full flex justify-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800">Startups in {industry}</h1>
      </div>

      {/* Search by Startup Name with Search Button */}
      <div className="w-full max-w-3xl mt-6 flex items-center">
        <input
          type="text"
          placeholder="Search startups by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearchButtonClick}
          className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-700 transition ml-2" // ml-2 adds a small gap between the button and search bar
        >
          Search
        </button>
      </div>

      {/* Show "No Startups Found" Message if No Search Results */}
      {filteredStartups.length === 0 && searchQuery !== "" && (
        <div className="mt-6 text-center text-gray-600">
          <p className="font-semibold mb-4">Startup not found, We will surely:</p>
          <div className="flex justify-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl">✓</span>
              <p>Verify</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl">+</span>
              <p>Add</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl">🏆</span>
              <p>Showcase</p>
            </div>
          </div>
        </div>
      )}

      {/* Category Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-8">
        {Object.entries(categories).map(([key, title]) => {
          const categoryStartups = filteredStartups.filter((startup) => startup.category === key);
          const visibleStartups = expandedCategories[key] ? categoryStartups : categoryStartups.slice(0, 4);

          return (
            <div key={key} className="w-full bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">{title}</h2>

              <div className="grid grid-cols-2 gap-4">
                {visibleStartups.map((startup) => (
                  <motion.div
                    key={startup.id}
                    className="cursor-pointer flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedStartup(startup)}  // Open Block Popup on click
                  >
                    <Image
                      src={startup.logo}
                      alt="Startup Logo"
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {categoryStartups.length > 4 && (
                <motion.button
                  onClick={() => setExpandedCategories((prev) => ({ ...prev, [key]: !prev[key] }))}
                  className="mt-4 text-blue-500 hover:text-blue-700 transition-all font-medium block mx-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  {expandedCategories[key] ? "Show Less ▲" : "More ▼"}
                </motion.button>
              )}
            </div>
          );
        })}
      </div>

      {/* City Search Section */}
      <div className="w-full max-w-3xl mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Startups Serving in Your City</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city name..."
            value={cityQuery}
            onChange={(e) => setCityQuery(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={searchCityStartups}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* City Search Popup */}
      <AnimatePresence>
        {cityPopupOpen && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button onClick={() => setCityPopupOpen(false)} className="absolute top-3 right-3 text-red-600 text-xl font-bold">✖</button>
              <h3 className="text-xl font-semibold mb-4">Startups in {cityQuery}</h3>

              {cityStartups.length === 0 ? (
                <div className="text-center text-gray-600">
                  <p className="font-semibold mb-4">Startup not found, We will surely:</p>
                  <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl">✓</span>
                      <p>Verify</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl">+</span>
                      <p>Add</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl">🏆</span>
                      <p>Showcase</p>
                    </div>
                  </div>
                </div>
              ) : (
                cityStartups.map((startup) => (
                  <div key={startup.id} className="mb-4 flex items-start gap-4 border-b pb-4">
                    <div className="flex flex-col items-start w-full">
                      {/* Logo is placed at the top-center of the popup */}
                      <Image src={startup.logo} alt={startup.name} width={100} height={100} className="rounded-full mb-4 mx-auto" />
                      <div className="text-left">
                        <p className="font-semibold">{startup.name}</p>
                        {/* Short Description */}
                        <p className="text-gray-600 text-sm">{startup.description}</p>
                        <button
                          onClick={() => router.push(`/startup/${startup.id}`)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          More →
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Block Popup for B2B, B2C, etc. */}
      <AnimatePresence>
        {selectedStartup && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button onClick={() => setSelectedStartup(null)} className="absolute top-3 right-3 text-red-600 text-xl font-bold">✖</button>
              <div className="flex flex-col items-start">
                <Image src={selectedStartup.logo} alt={selectedStartup.name} width={100} height={100} className="rounded-full mb-4 mx-auto" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{selectedStartup.name}</h3>
                  <p className="text-gray-600">{selectedStartup.description}</p>
                  <p><strong>Funding:</strong> {selectedStartup.funding}</p>
                  <p><strong>Market:</strong> {selectedStartup.market}</p>
                  <p><strong>Growth:</strong> {selectedStartup.growth}</p>
                  <p><strong>Revenue:</strong> {selectedStartup.revenue}</p>
                  <p><strong>Innovation:</strong> {selectedStartup.innovation}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Added Here */}
      <Footer /> {/* Include Footer component at the bottom */}
    </div>
  );
}
