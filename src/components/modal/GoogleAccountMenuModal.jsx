import React from "react";
import { FaChevronDown, FaUser, FaShieldAlt, FaCogs } from "react-icons/fa";
import { BsIncognito } from "react-icons/bs";
import { RiKeyFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineInterests } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";

import { IoClose } from "react-icons/io5";
import { MenuItem } from "../utils";
import Modal from "./Modal";
import logoTitle from "./../images/googlelogo_title.png";
import { useSelector } from "react-redux";

export const GoogleAccountMenuModal = ({ setOpen, open }) => {
  const user = useSelector((state) => state?.data);

  return (
    <Modal open={open} onClose={setOpen}>
      <div className="mx-auto overflow-hidden">
        <IoClose
          onClick={() => setOpen(false)}
          className="w-5 h-5 fixed top-4 left-3 cursor-pointer text-[#bfbfbf]"
        />
        <div className="flex justify-center text-text-dark-p items-center">
          <img
            className="border-none my-2"
            height={40}
            width={100}
            src={logoTitle}
            alt="Google"
          />
        </div>
        <div className="flex items-center justify-between p-4 ">
          <div className="flex items-center gap-3">
            {user?.profilePicture ? (
              <img
                src={user?.profilePicture}
                alt="Profile"
                className={`h-8 w-8 cursor-pointer rounded-full object-cover`}
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-disabled text-base">
                <FaUser className="h-4 w-4 text-gray-400" />
              </div>
            )}
            <div className="text-left">
              <div className="text-base text-white">{user?.name}</div>
              <div className="text-xs text-[#bfbfbf]">{user?.email}</div>
            </div>
          </div>
          <FaChevronDown className="text-gray-400" />
        </div>
        <button className="text-center text-sm text-white px-6 py-2.5 border border-[#70757a] mb-6 rounded-full font-medium">
          Manage your Google Account
        </button>
        <div className="border-t border-t-[#70757a]">
          <MenuItem icon={<BsIncognito />} label="Turn on Incognito" border />
          <MenuItem
            icon={<RxCounterClockwiseClock />}
            label="Search history"
            subLabel="Delete last 15 mins"
            border
          />
          <MenuItem icon={<FaShieldAlt size={16} />} label="SafeSearch" />
          <MenuItem icon={<MdOutlineInterests />} label="Interests" />
          <MenuItem icon={<RiKeyFill />} label="Passwords" />
          <MenuItem icon={<CgProfile />} label="Your profile" />
          <MenuItem icon={<TbSettings />} label="Settings" semiBorder />
          <MenuItem
            icon={<FaRegCircleQuestion size={16} />}
            label="Help and feedback"
            border
          />
        </div>
        <div className="flex justify-center items-center gap-2 text-xs text-gray-400 py-4">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </Modal>
  );
};
