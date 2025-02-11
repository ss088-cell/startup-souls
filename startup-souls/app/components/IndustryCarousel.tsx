"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fix Next.js SSR issues
const Slider = dynamic(() => import("react-slick").then((mod) => mod.default), { ssr: false });

const industries = [
  {
    name: "Agriculture",
    link: "/industries/agriculture",
    startups: [
      "/logos/agriculture1.png",
      "/logos/agriculture2.png",
      "/logos/agriculture3.png",
      "/logos/agriculture4.png",
      "/logos/agriculture5.png",
      "/logos/agriculture6.png",
      "/logos/agriculture7.png",
      "/logos/agriculture8.png",
      "/logos/agriculture9.png",
      "/logos/agriculture10.png",
      "/logos/agriculture11.png",
      "/logos/agriculture12.png",
      "/logos/agriculture13.png",
      "/logos/agriculture14.png",
      "/logos/agriculture15.png",
    ],
  },
  {
    name: "AI",
    link: "/industries/ai",
    startups: [
      "/logos/ai1.png",
      "/logos/ai2.png",
      "/logos/ai3.png",
      "/logos/ai4.png",
      "/logos/ai5.png",
      "/logos/ai6.png",
      "/logos/ai7.png",
      "/logos/ai8.png",
      "/logos/ai9.png",
      "/logos/ai10.png",
      "/logos/ai11.png",
      "/logos/ai12.png",
      "/logos/ai13.png",
      "/logos/ai14.png",
      "/logos/ai15.png",
    ],
  },
  {
    name: "Online Shopping (E-Commerce)",
    link: "/industries/ecommerce",
    startups: [
      "/logos/ecommerce1.png",
      "/logos/ecommerce2.png",
      "/logos/ecommerce3.png",
      "/logos/ecommerce4.png",
      "/logos/ecommerce5.png",
      "/logos/ecommerce6.png",
      "/logos/ecommerce7.png",
      "/logos/ecommerce8.png",
      "/logos/ecommerce9.png",
      "/logos/ecommerce10.png",
      "/logos/ecommerce11.png",
      "/logos/ecommerce12.png",
      "/logos/ecommerce13.png",
      "/logos/ecommerce14.png",
      "/logos/ecommerce15.png",
    ],
  },
  {
    name: "Education (Ed-Tech)",
    link: "/industries/edtech",
    startups: [
      "/logos/education1.png",
      "/logos/education2.png",
      "/logos/education3.png",
      "/logos/education4.png",
      "/logos/education5.png",
      "/logos/education6.png",
      "/logos/education7.png",
      "/logos/education8.png",
      "/logos/education9.png",
      "/logos/education10.png",
      "/logos/education11.png",
      "/logos/education12.png",
      "/logos/education13.png",
      "/logos/education14.png",
      "/logos/education15.png",
    ],
  },
  {
    name: "Finance (Fintech)",
    link: "/industries/fintech",
    startups: [
      "/logos/fintech1.png",
      "/logos/fintech2.png",
      "/logos/fintech3.png",
      "/logos/fintech4.png",
      "/logos/fintech5.png",
      "/logos/fintech6.png",
      "/logos/fintech7.png",
      "/logos/fintech8.png",
      "/logos/fintech9.png",
      "/logos/fintech10.png",
      "/logos/fintech11.png",
      "/logos/fintech12.png",
      "/logos/fintech13.png",
      "/logos/fintech14.png",
      "/logos/fintech15.png",
    ],
  },
  {
    name: "Health (Health Tech)",
    link: "/industries/healthtech",
    startups: [
      "/logos/healthtech1.png",
      "/logos/healthtech2.png",
      "/logos/healthtech3.png",
      "/logos/healthtech4.png",
      "/logos/healthtech5.png",
      "/logos/healthtech6.png",
      "/logos/healthtech7.png",
      "/logos/healthtech8.png",
      "/logos/healthtech9.png",
      "/logos/healthtech10.png",
      "/logos/healthtech11.png",
      "/logos/healthtech12.png",
      "/logos/healthtech13.png",
      "/logos/healthtech14.png",
      "/logos/healthtech15.png",
    ],
  },
  {
    name: "Media and Entertainment",
    link: "/industries/media",
    startups: [
      "/logos/media1.png",
      "/logos/media2.png",
      "/logos/media3.png",
      "/logos/media4.png",
      "/logos/media5.png",
      "/logos/media6.png",
      "/logos/media7.png",
      "/logos/media8.png",
      "/logos/media9.png",
      "/logos/media10.png",
      "/logos/media11.png",
      "/logos/media12.png",
      "/logos/media13.png",
      "/logos/media14.png",
      "/logos/media15.png",
    ],
  },
  {
    name: "Real Estate Tech",
    link: "/industries/realestate",
    startups: [
      "/logos/realestate1.png",
      "/logos/realestate2.png",
      "/logos/realestate3.png",
      "/logos/realestate4.png",
      "/logos/realestate5.png",
      "/logos/realestate6.png",
      "/logos/realestate7.png",
      "/logos/realestate8.png",
      "/logos/realestate9.png",
      "/logos/realestate10.png",
      "/logos/realestate11.png",
      "/logos/realestate12.png",
      "/logos/realestate13.png",
      "/logos/realestate14.png",
      "/logos/realestate15.png",
    ],
  },
  {
    name: "Travel Tech",
    link: "/industries/traveltech",
    startups: [
      "/logos/traveltech1.png",
      "/logos/traveltech2.png",
      "/logos/traveltech3.png",
      "/logos/traveltech4.png",
      "/logos/traveltech5.png",
      "/logos/traveltech6.png",
      "/logos/traveltech7.png",
      "/logos/traveltech8.png",
      "/logos/traveltech9.png",
      "/logos/traveltech10.png",
      "/logos/traveltech11.png",
      "/logos/traveltech12.png",
      "/logos/traveltech13.png",
      "/logos/traveltech14.png",
      "/logos/traveltech15.png",
    ],
  },
];

export default function IndustryCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one industry at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full bg-white p-6 shadow-md">
      <Slider {...settings}>
        {industries.map((industry, index) => (
          <div key={index} className="text-center">
            <Link href={industry.link}>
              <h2 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition-all duration-300 cursor-pointer mb-4">
                {industry.name}
              </h2>
            </Link>
            {/* Grid Layout: 3 rows × 5 columns */}
            <div className="grid grid-cols-5 grid-rows-3 gap-4 justify-center">
              {industry.startups.map((logo, i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src={logo}
                    alt={`${industry.name} Startup`}
                    width={100}
                    height={100}
                    className="rounded-md shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
