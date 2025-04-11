import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";

const TrendingSearches = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="transition-opacity opacity-100 border-none shadow-none">
      <div className="flex items-center bg-transparent rounded-t-lg mb-2 ml-4 px-2 py-1">
        <h2 className="text-xl text-left w-full font-roboto text-blue-600 leading-7">
          Trending searches
        </h2>
        <div className="relative">
          <button
            className="p-1 rounded hover:bg-gray-200"
            aria-label="More options"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <BsThreeDotsVertical className="h-5 w-5 text-gray-600" />
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <FaArrowTrendUp className="w-4 h-4 text-gray-600" />
                Send feedback
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a
                  href="/preferences?hl=en-IN"
                  className="text-blue-600 no-underline"
                >
                  Preferences
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingSearches;
