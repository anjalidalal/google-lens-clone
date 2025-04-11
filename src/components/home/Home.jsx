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
import { useSelector } from "react-redux";
import GoogleHomeScreen from "./GoogleHomeScreen";
import RecentSearches from "../search/RecentSearch";
import GoogleLensUpload from "../search/GoogleLensUpload";

const HomePage = () => {
  const user = useSelector((state) => state?.data);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);
  const [showMicUI, setShowMicUI] = useState(false);
  const [googleLensUpload, setGoogleLensUpload] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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
    setSelectedImage(null);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleShowDefaultScreen = () => {
    setValue("");
    setIsInputFocused(false);
    setSelectedImage(null);
  };

  console.log(value, selectedImage);

  return (
    <>
      <main>
        {!isInputFocused && <PrimaryNavbar setOpen={setOpenModal} />}
        <section className="pt-5 flex px-2 justify-center items-center flex-col">
          {!isInputFocused && <SecondaryNavbar />}
          <section
            className={`w-full flex items-center p-2 ${
              isInputFocused ? "lg:justify-between" : "justify-center"
            }`}
          >
            <div
              className={`w-full flex items-center md:relative justify-center gap-8 ${
                isInputFocused && "lg:justify-start"
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
              <div className="flex items-center bg-[#202124] lg:w-full rounded-full p-2 w-full max-w-xl h-12 border border-[#70757a] focus-within:border-blue-500">
                <div className="flex items-center">
                  {isInputFocused && (
                    <button
                      className={`md:pl-2 text-gray-400 ${
                        value || isInputFocused ? "block" : "hidden"
                      }`}
                      onClick={handleShowDefaultScreen}
                    >
                      <IoChevronBack size={20} />
                    </button>
                  )}
                  {selectedImage && (
                    <div className="pl-1">
                      <img
                        alt={selectedImage.name}
                        src={URL.createObjectURL(selectedImage)}
                        className="h-8 w-9 rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>

                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Search"
                  ref={inputRef}
                  onFocus={() => setIsInputFocused(true)}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2 md:px-3"
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
                  <div className="flex justify-center items-center gap-2 md:gap-0">
                    <button
                      className="md:px-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        startListening();
                        setShowMicUI(true);
                      }}
                    >
                      <MikeIcon />
                    </button>
                    <button
                      onClick={() => setGoogleLensUpload(true)}
                      className="md:px-3 pr-1"
                    >
                      <LensIcon />
                    </button>
                  </div>
                )}
                {listening && showMicUI && (
                  <MicSearchScreen onClose={() => setShowMicUI(false)} />
                )}
              </div>
            </div>
            {googleLensUpload && (
              <GoogleLensUpload
                setOpen={setGoogleLensUpload}
                setValue={setValue}
                setSelectedImage={setSelectedImage}
                setIsInputFocused={setIsInputFocused}
              />
            )}
            {isInputFocused && (
              <div className="items-center mr-3 py-2 gap-5 hidden lg:flex">
                <LabsIcon /> <GridIcon />
                <UserAccountCard setOpen={setOpenModal} />
              </div>
            )}
          </section>
        </section>
        {value.length > 0 ? (
          <SearchResultUI handleAction={handleShowDefaultScreen} />
        ) : (
          <>{!isInputFocused ? <GoogleHomeScreen /> : <RecentSearches />}</>
        )}
        {openModal && (
          <GoogleAccountMenuModal setOpen={setOpenModal} open={openModal} />
        )}
      </main>
    </>
  );
};

export default HomePage;
