import React, { useRef } from "react";
import { GoogleCloneIcon } from "../images/icons";
import { IoClose } from "react-icons/io5";

const GoogleLensUpload = ({
  setOpen,
  setValue,
  setSelectedImage,
  setIsInputFocused,
}) => {
  const imageInputRef = useRef(null);

  const handleImageSelection = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.target.files;

    if (files && files.length > 0) {
      setSelectedImage(files[0]);
      setValue(" ");
      setOpen(false);
      setIsInputFocused(true);
    }
  };

  return (
    <div className="top-[27%] md:top-[28%] w-full z-50 flex absolute p-3 md:p-0 items-center max-md:max-w-[600px] md:w-[576px] justify-center">
      <div
        style={{ boxShadow: "0px 4px 6px rgba(32, 33, 36, 0.28)" }}
        className="bg-[#303134] rounded-3xl w-full max-w-2xl mx-auto p-3 md:p-5"
      >
        <div className="flex relative md:justify-center items-center mb-4">
          <h2 className="text-[#f1f3f4] inline-flex text-base md:text-center">
            Search
            <span className="hidden md:block"> any</span> image with Google Lens
          </h2>
          <button
            className="absolute top-0.5 right-0 text-[#f1f3f4] text-xl"
            onClick={() => setOpen(false)}
          >
            <IoClose />
          </button>
        </div>
        <div className="border border-[#3c4043] border-dashed rounded-lg p-3 md:p-5 text-center bg-[#202124] text-gray-300 mb-4">
          <div className="inline-flex h-[160px] flex-col md:flex-row items-center justify-center md:justify-normal flex-grow space-y-2">
            <GoogleCloneIcon />
            <p className="ml-4 mt-2 md:mt-0 text-sm text-[#93969b]">
              Drag an image here or{" "}
              <input
                type="file"
                ref={imageInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleImageSelection}
              />
              <span
                onClick={() => imageInputRef.current?.click()}
                className="text-[#8ab4f8] cursor-pointer hover:underline"
              >
                upload a file
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <hr className="flex-grow border-gray-600" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Paste image link"
              className="flex-grow bg-[#303134] text-sm text-[#f1f3f4] border border-[#3c4043] rounded-[36px] px-4 py-2 placeholder:text-[#93969b] focus:outline-none"
            />
            <button className="bg-[#303134] text-sm font-normal text-[#8ab4f8] px-6 py-2 hover:bg-transparent hover:text-[#f1f3f4] border rounded-[36px] border-[#3c4043]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLensUpload;
