import React from "react";
import { PiClockCounterClockwiseFill } from "react-icons/pi";

const recentSearches = [
  "sleeveless gilet jacket men india",
  "sequins skirt less than 2000",
  "cut out bodysuit india",
  "floral crop top",
  "black leather skirt with button",
  "neon shirt",
  "oversized women's leather jacket india",
];

const RecentSearches = ({ setValue }) => {
  return (
    <main className="flex justify-center items-center lg:justify-start lg:ml-40">
      <div className="text-white max-md:max-w-[600px] w-full md:max-w-[576px] px-5 md:px-1">
        <div className="flex text-[#ffffffa8] items-center justify-between mb-4">
          <p className="text-sm">Recent searches</p>
          <p className="text-xs">MANAGE HISTORY</p>
        </div>
        {recentSearches.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-3"
            onClick={() => setValue(item)}
          >
            <div className="bg-[#ffffff1f] flex items-center justify-center h-[18px] w-[18px] rounded-full">
              <PiClockCounterClockwiseFill
                size={14}
                className="text-[#ffffffa8]"
              />
            </div>
            <span className="text-sm font-light">{item}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RecentSearches;
