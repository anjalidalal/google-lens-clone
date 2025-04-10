import React from "react";
import { FaUser } from "react-icons/fa";
import { GridIcon, LabsIcon } from "../images/icons";

const PrimaryNavbar = ({ setOpen }) => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-[#202124] text-white">
      <div className="flex items-center gap-3">
        <a
          href="https://labs.google.com/search?source=hp_search&authuser=0"
          title="Search Labs"
          className="p-1"
        >
          <LabsIcon />
        </a>
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

      <div className="flex items-center gap-4">
        <a
          href="https://www.google.co.in/intl/en/about/products?tab=wh"
          className="p-2 hover:bg-gray-700 rounded-full"
          aria-label="Google Apps"
        >
          <GridIcon />
        </a>
        <div
          onClick={() => setOpen(true)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-disabled text-base"
        >
          <FaUser className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default PrimaryNavbar;
