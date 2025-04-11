import React, { useState } from "react";
import {
  FaChevronDown,
  FaClock,
  FaKey,
  FaThLarge,
  FaLock,
  FaSearch,
  FaUser,
  FaShieldAlt,
  FaQuestionCircle,
  FaCogs,
} from "react-icons/fa";
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
          className="w-5 h-5 fixed top-3 left-3 cursor-pointer text-[#bfbfbf]"
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
          <MenuItem icon={<FaThLarge />} label="Turn on Incognito" />
          <MenuItem
            icon={<FaClock />}
            label="Search history"
            subLabel="Saving"
          />
          <MenuItem
            icon={<div className="h-4 w-4"></div>}
            label="Delete last 15 mins"
          />
          <MenuItem icon={<FaShieldAlt />} label="SafeSearch" />
          <MenuItem icon={<FaThLarge />} label="Interests" />
          <MenuItem icon={<FaKey />} label="Passwords" />
          <MenuItem icon={<FaUser />} label="Your profile" />
          <MenuItem icon={<FaSearch />} label="Search personalisation" />
          <MenuItem icon={<FaCogs />} label="Settings" />
          <MenuItem icon={<FaQuestionCircle />} label="Help and feedback" />
        </div>

        <div className="flex justify-center items-center gap-2 text-xs text-gray-400 py-4 border-t border-gray-700">
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
