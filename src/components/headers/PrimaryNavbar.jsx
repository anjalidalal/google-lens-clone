import React from "react";
import { GridIcon, LabsIcon } from "../images/icons";
import { UserAccountCard } from "../utils";

const PrimaryNavbar = ({ setOpen }) => {
  return (
    <header className="flex justify-between md:justify-end items-center px-4 py-2 bg-[#202124] text-white">
      <div className="block md:hidden">
        <LabsIcon />
      </div>
      <div className="flex items-center gap-4">
        <div className="md:block hidden">
          <GridIcon />
        </div>
        <UserAccountCard setOpen={setOpen} />
      </div>
    </header>
  );
};

export default PrimaryNavbar;
