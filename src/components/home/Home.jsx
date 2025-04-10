import React, { useEffect, useRef, useState } from "react";
import PrimaryNavbar from "../headers/PrimaryNavbar";
import SecondaryNavbar from "../headers/SecondaryNavbar";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { GoogleAccountMenuModal } from "../modal/GoogleAccountMenuModal";
import { LensIcon, MikeIcon } from "../images/icons";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";
import { MicSearchScreen } from "../search/MicSearchScreen";
import SearchResultUI from "../search/SearchResultUI";
import logoTitle from "./../images/googlelogo_title.png";
import { GridIcon, LabsIcon } from "../images/icons";
import { UserAccountCard } from "../utils";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);
  const [showMicUI, setShowMicUI] = useState(false);
  const { transcript, listening, startListening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setValue(transcript);
      inputRef.current?.focus();
      setIsInputFocused(true);
      console.log(transcript);
    }
  }, [transcript]);

  const handleClear = () => {
    setValue(" ");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleShowDefaultScreen = () => {
    setValue("");
    setIsInputFocused(false);
  };

  return (
    <>
      <main>
        {!isInputFocused && <PrimaryNavbar setOpen={setOpenModal} />}
        <section className="pt-5 flex px-2 justify-center items-center flex-col">
          {!isInputFocused && <SecondaryNavbar />}
          <section
            className={`w-full flex items-center justify-center  p-2 ${
              isInputFocused && "lg:justify-between"
            }`}
          >
            {isInputFocused && (
              <img
                className="ml-3 hidden lg:block"
                height={40}
                width={100}
                src={logoTitle}
                alt="Google"
              />
            )}
            <div className="flex items-center bg-[#202124] rounded-full p-2 w-full max-w-xl h-12 border border-[#70757a] focus-within:border-blue-500">
              {isInputFocused && (
                <button
                  className={`pl-2 text-gray-400 ${value ? "block" : "hidden"}`}
                  onClick={handleShowDefaultScreen}
                >
                  {value && <IoChevronBack size={20} />}
                </button>
              )}
              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search"
                ref={inputRef}
                onFocus={() => setIsInputFocused(true)}
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
                  <button
                    className="px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      startListening();
                      setShowMicUI(true);
                    }}
                  >
                    <MikeIcon />
                  </button>
                  <div className="px-3">
                    <LensIcon />
                  </div>
                </div>
              )}
              {listening && showMicUI && (
                <MicSearchScreen onClose={() => setShowMicUI(false)} />
              )}
            </div>
            {isInputFocused && (
              <div className="items-center mr-3 py-2 gap-5 hidden lg:flex">
                <LabsIcon /> <GridIcon />
                <UserAccountCard setOpen={setOpenModal} />
              </div>
            )}
          </section>
        </section>
        {value.length > 0 && (
          <SearchResultUI handleAction={handleShowDefaultScreen} />
        )}
        {openModal && (
          <GoogleAccountMenuModal setOpen={setOpenModal} open={openModal} />
        )}
      </main>
    </>
  );
};

export default HomePage;
