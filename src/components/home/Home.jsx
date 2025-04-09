import React, { useEffect, useRef, useState } from "react";
import PrimaryNavbar from "../headers/PrimaryNavbar";
import SecondaryNavbar from "../headers/SecondaryNavbar";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { GoogleAccountMenuModal } from "../modal/GoogleAccountMenuModal";
import { LensIcon, MikeIcon } from "../images/icons";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";
import { MicSearchScreen } from "../search/MicSearchScreen";

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
    setValue("");
    setIsInputFocused(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <main>
        {!isInputFocused && <PrimaryNavbar setOpen={setOpenModal} />}
        <section className="pt-5 flex px-2 justify-center items-center flex-col">
          {!isInputFocused && <SecondaryNavbar />}
          <section className="w-full flex justify-center items-center flex-col p-2">
            <div className="flex items-center bg-[#202124] rounded-full p-2 w-full max-w-xl h-12 border border-[#70757a] focus-within:border-blue-500">
              {isInputFocused && (
                <button
                  className={`pl-2 text-gray-400 ${value ? "block" : "hidden"}`}
                  onClick={handleClear}
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
