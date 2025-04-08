import React from "react";
import { FaUser } from "react-icons/fa";

const PrimaryNavbar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-[#202124] text-white">
      {/* Left section: Search Labs Icon */}
      <div className="flex items-center gap-3">
        <a
          href="https://labs.google.com/search?source=hp_search&authuser=0"
          title="Search Labs"
          className="p-1"
        >
          <svg
            className="w-6 h-6 fill-white"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z" />
          </svg>
        </a>

        {/* Tabs */}
        <div className="space-x-4 text-sm">
          <a
            href="#"
            className="text-blue-500 font-medium border-b-2 border-blue-500 pb-1"
          >
            All
          </a>
          <a
            href="https://www.google.com/imghp"
            className="hover:text-blue-400"
          >
            Images
          </a>
        </div>
      </div>

      {/* Right section: Apps & Profile */}
      <div className="flex items-center gap-4">
        {/* Google apps grid icon */}
        <a
          href="https://www.google.co.in/intl/en/about/products?tab=wh"
          className="p-2 hover:bg-gray-700 rounded-full"
          aria-label="Google Apps"
        >
          <svg
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
          </svg>
        </a>

        {/* Profile picture */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-disabled text-base">
          <FaUser className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default PrimaryNavbar;
