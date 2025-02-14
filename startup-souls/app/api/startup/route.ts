import { NextRequest, NextResponse } from "next/server";
import { MdDescription } from "react-icons/md";

const startupData = {
  agriculture: [
    {
      id: 1,
      name: "AgriSense",
      description: "AgriSense",
      logo: "/logos/agriculture1.png",
      funding: "$5M",
      market: "Crop Monitoring",
      growth: "Fast",
      revenue: "$1.2M",
      innovation: "AI-powered Soil Analysis",
      category: "b2b",
      city: "Delhi",
    },
    {
      id: 2,
      name: "FarmFlow",
      description: "AgriSense",
      logo: "/logos/agriculture2.png",
      funding: "$10M",
      market: "Precision Farming",
      growth: "Steady",
      revenue: "$3.5M",
      innovation: "Smart Irrigation Systems",
      category: "b2c",
      city: "Mumbai",
    },
    {
      id: 3,
      name: "AutoFarm",
      description: "AgriSense",
      logo: "/logos/agriculture3.png",
      funding: "$8M",
      market: "Farm Automation",
      growth: "Moderate",
      revenue: "$2.5M",
      innovation: "IoT-based Smart Sensors",
      category: "both",
      city: "Mumbai",
    },
    {
      id: 4,
      name: "GlobalAgri",
      description: "AgriSense",
      logo: "/logos/agriculture4.png",
      funding: "$15M",
      market: "Export-Oriented AgriTech",
      growth: "High",
      revenue: "$6M",
      innovation: "Blockchain-Based Supply Chain",
      category: "international",
      city: "Mumbai",
    },
    {
      id: 5,
      name: "HyderAgro",
      description: "AgriSense",
      logo: "/logos/agriculture5.png",
      funding: "$15M",
      market: "Agri Exports",
      growth: "High",
      revenue: "$6M",
      innovation: "Global Agri-Trade",
      category: "international",
      city: "Hyderabad",
    },
    {
      id: 6,
      name: "AgriSupplyChain",
      description: "AgriSense",
      logo: "/logos/agriculture6.png",
      funding: "$15M",
      market: "Agri Supply Chain",
      growth: "High",
      revenue: "$6M",
      innovation: "Blockchain-Based Supply Chain",
      category: "b2b",
      city: "Chennai",
    },
    {
      id: 7,
      name: "AI-Farming",
      description: "AgriSense",
      logo: "/logos/agriculture7.png",
      funding: "$10M",
      market: "Precision Farming",
      growth: "Steady",
      revenue: "$3.5M",
      innovation: "AI-based Farming",
      category: "b2c",
      city: "Kolkata",
    },
    {
      id: 8,
      name: "SoilSense",
      description: "AgriSense",
      logo: "/logos/agriculture8.png",
      funding: "$8M",
      market: "Farm IoT",
      growth: "Moderate",
      revenue: "$2.5M",
      innovation: "Smart Sensors for Soil",
      category: "both",
      city: "Ahmedabad",
    },
    {
      id: 9,
      name: "CropYieldPro",
      description: "AgriSense",
      logo: "/logos/agriculture9.png",
      funding: "$5M",
      market: "Crop Yield Analysis",
      growth: "Fast",
      revenue: "$1.2M",
      innovation: "Satellite-Based Monitoring",
      category: "b2b",
      city: "Mumbai",
    },
    {
      id: 10,
      name: "MLFarming",
      description: "AgriSense",
      logo: "/logos/agriculture10.png",
      funding: "$10M",
      market: "Precision Farming",
      growth: "Steady",
      revenue: "$3.5M",
      innovation: "Machine Learning for Crops",
      category: "b2b",
      city: "Lucknow",
    },
    {
      id: 11,
      name: "FarmDrones",
      description: "AgriSense",
      logo: "/logos/agriculture11.png",
      funding: "$8M",
      market: "Farm Automation",
      growth: "Moderate",
      revenue: "$2.5M",
      innovation: "Drones for Farming",
      category: "b2b",
      city: "Indore",
    },
    {
      id: 12,
      name: "AgriBlockchain",
      description: "AgriSense",
      logo: "/logos/agriculture12.png",
      funding: "$15M",
      market: "Export-Oriented AgriTech",
      growth: "High",
      revenue: "$6M",
      innovation: "Agri Blockchain",
      category: "b2b",
      city: "Bhopal",
    },
    {
      id: 13,
      name: "AgriMarketX",
      description: "AgriSense",
      logo: "/logos/agriculture13.png",
      funding: "$15M",
      market: "Agri Marketplace",
      growth: "High",
      revenue: "$6M",
      innovation: "AI-Powered Agri Trading",
      category: "b2b",
      city: "Patna",
    },
    {
      id: 14,
      name: "SmartAgriStore",
      description: "AgriSense",
      logo: "/logos/agriculture14.png",
      funding: "$15M",
      market: "Agri Warehousing",
      growth: "High",
      revenue: "$6M",
      innovation: "Smart Storage Management",
      category: "b2b",
      city: "Chandigarh",
    },
    {
      id: 15,
      name: "PrecisionFarms",
      description: "AgriSense",
      logo: "/logos/agriculture15.png",
      funding: "$10M",
      market: "Precision Farming",
      growth: "Steady",
      revenue: "$3.5M",
      innovation: "AI-Driven Farming",
      category: "b2b",
      city: "Nagpur",
    },
    {
      id: 16,
      name: "IoTAgriTech",
      description: "AgriSense",
      logo: "/logos/agriculture16.png",
      funding: "$8M",
      market: "Farm Tech",
      growth: "Moderate",
      revenue: "$2.5M",
      innovation: "IoT in Agriculture",
      category: "b2b",
      city: "Surat",
    },
  ],
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const industry = searchParams.get("industry");
    const city = searchParams.get("city");
    const name = searchParams.get("name");

    console.log("API Request Received: Industry ->", industry, "City ->", city, "Name ->", name);

    if (!industry || !startupData[industry]) {
      console.error("Industry not found:", industry);
      return NextResponse.json({ error: "Industry not found" }, { status: 404 });
    }

    let filteredStartups = startupData[industry];

    // Filter by city
    if (city) {
      filteredStartups = filteredStartups.filter((startup) =>
        startup.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    // Filter by name
    if (name) {
      filteredStartups = filteredStartups.filter((startup) =>
        startup.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return NextResponse.json(filteredStartups);
  } catch (error) {
    console.error("Error fetching startup data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
