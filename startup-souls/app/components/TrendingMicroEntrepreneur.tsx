"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample data for 10 micro entrepreneur ideas (Displayed as 2 sets of 5)
const microEntrepreneurIdeas = [
  { title: "Organic Farming", image: "/logos/micro1.png", info: "Grow and sell organic vegetables locally!" },
  { title: "Handmade Jewelry", image: "/logos/micro2.png", info: "Start a custom jewelry brand online!" },
  { title: "Freelance Writing", image: "/logos/micro3.png", info: "Offer high-quality content writing services!" },
  { title: "Baking Business", image: "/logos/micro4.png", info: "Sell homemade cakes, cookies, and pastries!" },
  { title: "Fitness Coaching", image: "/logos/micro5.png", info: "Become an online personal fitness trainer!" },
  { title: "Pet Care Services", image: "/logos/micro6.png", info: "Launch a pet-sitting or dog-walking business!" },
  { title: "Handmade Candles", image: "/logos/micro7.png", info: "Create scented candles and sell them online!" },
  { title: "Event Planning", image: "/logos/micro8.png", info: "Help plan weddings and corporate events!" },
  { title: "Soap Making", image: "/logos/micro9.png", info: "Start a business making organic skincare soaps!" },
  { title: "Social Media Manager", image: "/logos/micro10.png", info: "Manage social media accounts for small businesses!" },
];

export default function TrendingMicroEntrepreneur() {
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
      <h2 className="text-3xl font-semibold text-gray-800">💡 Trending Micro Entrepreneur Ideas</h2>
      <div className="relative flex items-center justify-center mt-6">
        <button onClick={prevSlide} className="absolute left-0 text-gray-700 hover:text-gray-900 p-4">
          <FaChevronLeft size={30} />
        </button>

        <div className="flex gap-4">
          {microEntrepreneurIdeas.slice(currentIndex * 5, currentIndex * 5 + 5).map((item, index) => (
            <div key={index} className="relative w-60 h-60 rounded-lg shadow-lg overflow-hidden group">
              <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="transition-all duration-300" />
              <div className={`absolute bottom-0 left-0 right-0 h-0 ${footerColor} flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-500 ease-in-out text-white text-lg font-medium p-4`}>
                {item.info}
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
