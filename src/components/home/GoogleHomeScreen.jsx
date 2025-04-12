import React from "react";
import { MdImageSearch } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { IoIosMusicalNote } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { InstagramIcon } from "../images/icons";
import { AiOutlinePlus } from "react-icons/ai";

const GoogleBelowSearchUI = () => {
  return (
    <main className=" flex flex-col justify-center items-center">
      <div className="text-white md:hidden block px-4 pt-4 space-y-6 pb-10 w-full max-md:max-w-[576px] md:max-w-[576px]">
        <div className="flex items-center justify-between gap-4 ">
          <div className="bg-[#5a4c26] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <MdImageSearch className="text-white" size={24} />
          </div>
          <div className="bg-[#2b3246] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <IoLanguage className="text-white" size={24} />
          </div>
          <div className="bg-[#293f34] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <LuGraduationCap className="text-white" size={24} />
          </div>
          <div className="bg-[#4a2b2e] p-3 h-12 w-[60px] rounded-full flex justify-center items-center">
            <IoIosMusicalNote className="text-white" size={24} />
          </div>
        </div>

        {/* Top Index & Trending Cards */}
        <div className="flex gap-4">
          <div className="flex-1 bg-[#3c4043e6] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Top index</p>
            <p className="text-2xl font-semibold text-green-400 mt-1">
              34,609.00
            </p>
          </div>
          <div className="flex-1 bg-[#3c4043e6] p-4 rounded-xl">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Trending</span>
              <span className="text-xs bg-[#2d2d2d] px-2 py-0.5 rounded-md">
                Today
              </span>
            </div>
            <p className="mt-2 text-white">RCB vs DC</p>
            <p className="text-sm text-gray-300">7:30 pm</p>
          </div>
        </div>
      </div>
      <div className="md:flex hidden flex-wrap items-center justify-center w-[450px] gap-4 md:gap-8 mt-4">
        <div className="flex flex-col items-center justify-center gap-3 text-white text-xs">
          <svg
            display="block"
            fill="none"
            height="48"
            viewBox="0 0 56 56"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28c0 13.975 10.24 25.56 23.625 27.66V36.094h-7.11V28h7.11v-6.169c0-7.017 4.18-10.893 10.576-10.893 3.064 0 6.268.546 6.268.546v6.891h-3.53c-3.479 0-4.564 2.159-4.564 4.373V28h7.766l-1.242 8.094h-6.524V55.66C45.761 53.56 56 41.975 56 28Z"
              fill="#1877F2"
            ></path>
            <path
              d="M38.9 36.094 40.14 28h-7.765v-5.252c0-2.215 1.085-4.373 4.563-4.373h3.53v-6.89s-3.203-.547-6.267-.547c-6.396 0-10.576 3.876-10.576 10.893V28h-7.11v8.094h7.11V55.66a28.206 28.206 0 0 0 8.75 0V36.094h6.524Z"
              fill="#fff"
            ></path>
          </svg>
          <span>facebook</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-white text-xs">
          <InstagramIcon />
          <span>instagram</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-white text-xs">
          <svg
            display="block"
            fill="none"
            height="48"
            viewBox="0 0 56 56"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#111111" height="56" rx="28" width="56"></rect>
            <path
              d="M30.3055 25.8561L40.505 14H38.088L29.2318 24.2945L22.1584 14H14L24.6964 29.5671L14 42H16.4171L25.7695 31.1287L33.2396 42H41.3979L30.3049 25.8561H30.3055ZM26.995 29.7042L25.9112 28.1541L17.288 15.8196H21.0005L27.9595 25.7739L29.0433 27.324L38.0892 40.2632H34.3767L26.995 29.7048V29.7042Z"
              fill="white"
            ></path>
          </svg>
          <span>twitter</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-white text-xs">
          <svg
            display="block"
            fill="none"
            height="48"
            viewBox="0 0 56 56"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#25D366" height="56" rx="28" width="56"></rect>
            <path
              clipRule="evenodd"
              d="M39.206 16.65A15.75 15.75 0 0 0 27.99 12c-8.74 0-15.854 7.113-15.857 15.855a15.821 15.821 0 0 0 2.117 7.927L12 44l8.406-2.205a15.837 15.837 0 0 0 7.577 1.93h.007c8.74 0 15.853-7.114 15.856-15.857a15.76 15.76 0 0 0-4.64-11.218ZM27.99 41.047h-.005c-2.365 0-4.684-.636-6.708-1.837l-.482-.286-4.988 1.309 1.331-4.864-.313-.499a13.146 13.146 0 0 1-2.015-7.014c.003-7.266 5.915-13.178 13.185-13.178a13.09 13.09 0 0 1 9.318 3.865 13.098 13.098 0 0 1 3.856 9.324c-.003 7.267-5.915 13.18-13.179 13.18Zm7.23-9.871c-.397-.199-2.345-1.157-2.708-1.289-.364-.132-.628-.198-.891.198-.264.397-1.024 1.29-1.255 1.554-.231.264-.462.297-.858.099-.396-.199-1.673-.617-3.187-1.966-1.178-1.051-1.973-2.348-2.204-2.745-.231-.397-.024-.611.173-.808.178-.178.397-.463.595-.695.198-.23.264-.396.396-.66.132-.265.066-.496-.033-.695-.098-.198-.89-2.148-1.221-2.941-.322-.773-.649-.668-.892-.68a16.01 16.01 0 0 0-.759-.014c-.264 0-.693.099-1.057.495-.363.397-1.387 1.356-1.387 3.305 0 1.95 1.42 3.835 1.618 4.1.199.264 2.794 4.265 6.769 5.982.945.409 1.683.653 2.259.835.948.302 1.812.26 2.495.157.76-.114 2.344-.958 2.674-1.884.33-.925.33-1.719.23-1.884-.098-.166-.362-.266-.758-.464Z"
              fill="#fff"
              fillRule="evenodd"
            ></path>
          </svg>
          <span>whatsapp</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-white text-xs">
          <div className="bg-[#8ab4f8] w-12 cursor-pointer h-12 flex items-center justify-center rounded-full">
            <AiOutlinePlus className="w-6 h-6 text-[#202124]" />
          </div>
          <span>Add Shortcut</span>
        </div>
      </div>
    </main>
  );
};

export default GoogleBelowSearchUI;
