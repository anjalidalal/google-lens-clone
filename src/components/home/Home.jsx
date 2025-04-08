import React, { useRef, useState } from "react";
import PrimaryNavbar from "../headers/PrimaryNavbar";
import SecondaryNavbar from "../headers/SecondaryNavbar";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { GoogleAccountMenuModal } from "../modal/GoogleAccountMenuModal";
import { LensIcon, MikeIcon } from "../images/icons";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [showBack, setShowBack] = useState(false);
  const inputRef = useRef(null);

  const handleClear = () => setValue("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setShowBack(e.target.value.length > 0);
  };

  return (
    <>
      <main>
        <PrimaryNavbar setOpen={setOpenModal} />
        <section className="pt-5 flex px-2 justify-center items-center flex-col">
          <SecondaryNavbar />
          <section className="w-full flex justify-center items-center flex-col p-2">
            <div className="flex items-center bg-[#202124] rounded-full p-2 w-full max-w-xl h-12 border border-[#70757a] focus-within:border-blue-500">
              {showBack && (
                <button
                  className="pl-2 text-gray-400"
                  onClick={handleClear}
                  aria-label="Back"
                >
                  <IoChevronBack size={20} />
                </button>
              )}

              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search"
                ref={inputRef}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-3"
              />

              {value && (
                <button
                  className="p-2 text-gray-400 hover:text-white"
                  onClick={handleClear}
                  aria-label="Clear"
                >
                  <IoCloseOutline size={20} />
                </button>
              )}
              {!value && (
                <div className="flex justify-center items-center">
                  <button className="px-3">
                    <MikeIcon />
                  </button>
                  <div className="px-3">
                    <LensIcon />
                  </div>
                </div>
              )}
            </div>
          </section>
        </section>
        {openModal && (
          <GoogleAccountMenuModal setOpen={setOpenModal} open={openModal} />
        )}
      </main>
    </>
  );
};

export default HomePage;
