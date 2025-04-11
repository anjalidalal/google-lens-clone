import React from "react";
import { MdImageSearch } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { IoIosMusicalNote } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";

const GoogleBelowSearchUI = () => {
  return (
    <main className=" flex flex-col justify-center items-center">
      <div className="text-white px-4 pt-4 space-y-6 pb-10 w-full max-md:max-w-[576px] md:max-w-[576px]">
        <div className="flex items-center justify-between gap-4 ">
          <div className="bg-[#5a4c26] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <MdImageSearch className="text-white" size={24} />
          </div>
          <div className="bg-[#2b3246] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <IoLanguage className="text-white" size={24} />
          </div>
          <div className="bg-[#293f34] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <LuGraduationCap className="text-white" size={24} />
          </div>
          <div className="bg-[#4a2b2e] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <IoIosMusicalNote className="text-white" size={24} />
          </div>
        </div>

        {/* Top Index & Trending Cards */}
        <div className="flex gap-4">
          <div className="flex-1 bg-[#3c4043e6] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Top index</p>
            <p className="text-2xl font-semibold text-green-400 mt-1">
              34,609.00
            </p>
          </div>
          <div className="flex-1 bg-[#3c4043e6] p-4 rounded-xl">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Trending</span>
              <span className="text-xs bg-[#2d2d2d] px-2 py-0.5 rounded-md">
                Today
              </span>
            </div>
            <p className="mt-2 text-white">RCB vs DC</p>
            <p className="text-sm text-gray-300">7:30 pm</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoogleBelowSearchUI;
