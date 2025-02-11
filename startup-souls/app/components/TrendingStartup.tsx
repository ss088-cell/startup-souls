"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample data for 10 trending startups (Displayed as 2 sets of 5)
const startupInsights = [
  { title: "AI Revolution", image: "/logos/startup1.png", fact: "AI-driven automation is transforming industries!" },
  { title: "Blockchain Boom", image: "/logos/startup2.png", fact: "Blockchain is securing transactions worldwide!" },
  { title: "E-commerce Growth", image: "/logos/startup3.png", fact: "Online shopping is expected to surpass $7T by 2025!" },
  { title: "HealthTech Innovation", image: "/logos/startup4.png", fact: "Wearable tech is revolutionizing healthcare!" },
  { title: "SaaS Expansion", image: "/logos/startup5.png", fact: "Cloud-based services are taking over the market!" },
  { title: "Fintech Advancements", image: "/logos/startup6.png", fact: "Digital payments are outpacing cash transactions globally!" },
  { title: "VR & AR Future", image: "/logos/startup7.png", fact: "Augmented Reality is changing gaming and shopping experiences!" },
  { title: "EdTech Revolution", image: "/logos/startup8.png", fact: "E-learning platforms are growing by 20% annually!" },
  { title: "Green Energy Startups", image: "/logos/startup9.png", fact: "Renewable energy startups are reducing carbon footprints!" },
  { title: "Remote Work Tools", image: "/logos/startup10.png", fact: "Remote work tools are shaping the future of businesses!" },
];

export default function TrendingStartup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const footerColor = "bg-gray-900"; // Matches Footer Color

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto py-8 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">🔥 Trending Startup Insights</h2>
      <div className="relative flex items-center justify-center mt-6">
        <button onClick={prevSlide} className="absolute left-0 text-gray-700 hover:text-gray-900 p-4">
          <FaChevronLeft size={30} />
        </button>

        <div className="flex gap-4">
          {startupInsights.slice(currentIndex * 5, currentIndex * 5 + 5).map((item, index) => (
            <div key={index} className="relative w-60 h-60 rounded-lg shadow-lg overflow-hidden group">
              <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="transition-all duration-300" />
              <div className={`absolute bottom-0 left-0 right-0 h-0 ${footerColor} flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-500 ease-in-out text-white text-lg font-medium p-4`}>
                {item.fact}
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="absolute right-0 text-gray-700 hover:text-gray-900 p-4">
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}
