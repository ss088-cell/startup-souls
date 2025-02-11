import FactsBox from "./components/FactsBox";
import IndustryCarousel from "./components/IndustryCarousel";
import TrendingStartupInsights from "./components/TrendingStartup";
import TrendingMicroEntrepreneur from "./components/TrendingMicroEntrepreneur";
import Footer from "./components/Footer"; // Footer Restored

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Welcome Text Section */}
      <div className="w-full text-center py-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide animate-fadeIn">
          Welcome to Startups Souls!!
        </h1>
        <p className="text-xl text-gray-700 mt-2 animate-fadeIn">
          "We help you grab opportunities"
        </p>

        {/* Search Bar Section */}
        <div className="mt-6 flex justify-center items-center space-x-4 animate-slideUp">
          <input
            type="text"
            placeholder="Search for startups, industries..."
            className="w-80 px-4 py-3 rounded-full border border-gray-300 shadow-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 outline-none text-gray-800"
          />
          <button
            className="px-6 py-3 text-white bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full shadow-md transform hover:scale-105 active:scale-95 text-lg font-semibold"
          >
            Search
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex w-full max-w-[1440px] mx-auto px-6 justify-between items-start mt-6 flex-grow">
        {/* Carousel at Extreme Left */}
        <div className="w-[75%]">
          <IndustryCarousel />
        </div>

        {/* Space Between Carousel & Fact Box */}
        <div className="w-6"></div>

        {/* Facts Box at Extreme Right */}
        <div className="w-[20%]">
          <FactsBox />
        </div>
      </div>

      {/* Trending Startup Insights Section */}
      <TrendingStartupInsights />

      {/* Trending Micro Entrepreneur Ideas Section */}
      <TrendingMicroEntrepreneur />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
