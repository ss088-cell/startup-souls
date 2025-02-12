import { NextRequest, NextResponse } from "next/server";

// Sample startup data with logo paths, no names
const startupData = {
  agriculture: [
    {
      id: 1,
      logo: "/logos/agriculture1.png",
      funding: "$5M",
      market: "Crop Monitoring",
      growth: "Fast",
      revenue: "$1.2M",
      innovation: "AI-powered Soil Analysis",
    },
    {
      id: 2,
      logo: "/logos/agriculture2.png",
      funding: "$10M",
      market: "Precision Farming",
      growth: "Steady",
      revenue: "$3.5M",
      innovation: "Smart Irrigation Systems",
    },
  ],
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const industry = searchParams.get("industry");

  if (!industry || !startupData[industry]) {
    return NextResponse.json({ error: "Industry not found" }, { status: 404 });
  }

  return NextResponse.json(startupData[industry]); // No 'name' field returned
}
