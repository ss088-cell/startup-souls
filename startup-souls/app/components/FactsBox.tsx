"use client";
import { useState, useEffect } from "react";

const facts = [
  "Startups contribute significantly to innovation and job creation.",
  "Many successful startups began in garages, including Apple & Amazon.",
  "The average startup takes 2-3 years to become profitable.",
  "Silicon Valley is home to the world's most successful startups.",
  "Tech startups dominate the global startup ecosystem.",
  "90% of startups fail, but learning from failures leads to success.",
  "Startups thrive in strong networking and mentorship environments.",
];

export default function FactsBox() {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-80 p-6 bg-white border border-gray-300 shadow-md rounded-md font-sans">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
        Startup Facts
      </h2>
      <ul className="list-disc list-inside text-gray-700 text-md">
        {facts.map((fact, index) => (
          <li key={index} className={`${index === currentFact ? "font-medium text-gray-900" : ""}`}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
