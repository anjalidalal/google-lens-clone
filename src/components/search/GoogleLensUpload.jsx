import React, { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import Webcam from "react-webcam";
import { GalleryIcon, GoogleCloneIcon } from "../images/icons";
import { IoClose } from "react-icons/io5";
import { getCroppedImg } from "./google-lens";
import { HiSearch } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdFlashOff } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const GoogleLensUpload = ({
  setOpen,
  setValue,
  setSelectedImage,
  setIsInputFocused,
  setShowWebcam,
  showWebcam,
}) => {
  const imageInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const webcamRef = useRef(null);
  const [webImageSelection, setWebImageSelection] = useState(false);
  const [facingMode, setFacingMode] = useState("user");
  const videoConstraints = {
    facingMode: facingMode,
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageSelection = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.target.files[0];
    if (file) {
      setShowWebcam(false);
      if (webImageSelection) {
        setSelectedImage(URL.createObjectURL(file));
        setValue(" ");
        setOpen(false);
        setIsInputFocused(true);
      } else {
        setImageSrc(URL.createObjectURL(file));
      }
    }
  };

  const handleEbImageSelection = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setValue(" ");
      setOpen(false);
      setIsInputFocused(true);
      setShowWebcam(false);
    }
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setShowWebcam(false);
  };

  const cropImage = async () => {
    try {
      const croppedImg = await getCroppedImg(imageSrc, croppedAreaPixels);
      setSelectedImage(croppedImg);
      setValue(" ");
      setOpen(false);
      setIsInputFocused(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className={`${
        !setOpen
          ? "hidden"
          : "top-0 max-md:min-h-screen sm:min-h-screen md:min-h-[372px]  md:h-[372px] fixed w-full z-50 flex md:absolute items-center md:w-[576px] justify-center"
      }`}
    >
      <div
        style={{ boxShadow: "0px 4px 6px rgba(32, 33, 36, 0.28)" }}
        className="bg-[#303134] md:rounded-3xl min-h-screen md:min-h-full md:h-auto w-full md:p-5"
      >
        <section className="hidden md:block">
          <div className="flex relative md:justify-center items-center mb-4">
            <h2 className="text-[#f1f3f4] inline-flex text-base md:text-center">
              Search
              <span className="hidden md:block"> any</span> image with Google
              Lens
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
                  onClick={() => {
                    setWebImageSelection(true);
                    imageInputRef.current?.click();
                  }}
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
        </section>
        {showWebcam && setOpen && (
          <div className="relative md:hidden w-full min-h-screen bg-black overflow-auto shadow-xl">
            <header className="flex absolute bg-transparent z-[100] px-4 py-5 items-center justify-between w-full text-white">
              <div className="flex items-center gap-4">
                <IoChevronBack
                  size={25}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
                <MdFlashOff size={24} />
              </div>
              <h3 className="text-xl font-medium">Google Lens</h3>
              <div className="flex items-center gap-4">
                <RxCounterClockwiseClock size={22} />
                <PiDotsThreeOutlineFill size={24} />
              </div>
            </header>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full min-h-screen object-cover"
              mirrored={facingMode === "user"} // Mirror front cam
            />
            {/* <div className="absolute inset-0 bottom-7 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-3/4 border-4 border-white rounded-xl opacity-60" />
            </div> */}
            <section className="bottom-24 mb-24 absolute w-full flex justify-center items-center">
              <div className="max-w-[350px] w-full flex justify-between items-center px-8">
                <button
                  onClick={() => imageInputRef.current?.click()}
                  className="h-[44px] w-[44px] cursor-pointer bg-white inline-flex justify-center items-center rounded-full"
                >
                  <GalleryIcon />
                </button>
                <div className="h-16 w-16 cursor-pointer border-2 bg-gray-800 border-white inline-flex justify-center items-center rounded-full">
                  <button
                    onClick={capture}
                    className="bg-white w-[56px] h-[56px] inline-flex justify-center items-center rounded-full shadow-lg"
                  >
                    <HiSearch size={24} className="text-gray-600" />
                  </button>
                </div>
                <button
                  onClick={() =>
                    setFacingMode((prev) =>
                      prev === "user" ? "environment" : "user"
                    )
                  }
                  className="h-[44px] w-[44px] text-lg cursor-pointer bg-white inline-flex justify-center items-center rounded-full"
                >
                  🔄
                </button>
              </div>
            </section>
          </div>
        )}
        {imageSrc && (
          <div className="min-h-screen md:hidden bg-black mb-6 rounded overflow-hidden">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <div className="h-16 w-16 mb-5 fixed bottom-0 left-1/2 -translate-x-1/2 cursor-pointer border-2 bg-gray-800 border-white inline-flex justify-center items-center rounded-full">
              <button
                onClick={cropImage}
                className="bg-white w-[56px] h-[56px] inline-flex justify-center items-center rounded-full shadow-lg"
              >
                <HiSearch size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleLensUpload;
