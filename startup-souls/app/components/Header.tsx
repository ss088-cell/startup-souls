"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false); // Controls industries dropdown

  return (
    <header className="w-full bg-white shadow-sm px-6 py-2 flex justify-between items-center">
      {/* Left: Logo with Image (Smaller for Compact Header) */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Startup Souls Logo"
            width={120} // Reduced width
            height={30} // Reduced height
            priority
          />
        </Link>

        {/* Secondary Navigation (Beside Logo) */}
        <div className="hidden md:flex space-x-6 text-gray-600 text-lg font-light">
          {/* Industries Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <div className="flex items-center hover:text-blue-500 transition-all duration-300">
              Industries <ChevronDownIcon className="h-5 w-5 ml-1" />
            </div>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-10"
                >
                  <ul className="text-gray-700 text-md font-medium">
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/agriculture">Agriculture</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/ai">AI</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/ecommerce">Online Shopping (E-Commerce)</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/education">Education</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/fintech">Finance (Fintech)</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/healthtech">Health (Health Tech)</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/media">Media and Entertainment</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/realestate">Real Estate Tech</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link href="/industries/traveltech">Travel Tech</Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/micro-entrepreneur">
            <span className="hover:text-blue-500 cursor-pointer transition-all duration-300">
              For Micro Entrepreneur
            </span>
          </Link>
          <Link href="/founders">
            <span className="hover:text-blue-500 cursor-pointer transition-all duration-300">
              For Founders
            </span>
          </Link>
        </div>
      </div>

      {/* Right: Main Navigation + Mobile Menu Button */}
      <nav className="flex items-center">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-lg font-medium">
          <li>
            <Link href="/">
              <span className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button
          className="md:hidden block text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </nav>
    </header>
  );
}
