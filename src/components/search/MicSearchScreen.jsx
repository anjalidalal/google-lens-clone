import React from "react";
import { motion } from "framer-motion";
import { IoChevronBack } from "react-icons/io5";

export const MicSearchScreen = ({ onClose }) => {
  const googleColors = [
    "bg-[#2563EB]",
    "bg-red-500",
    "bg-yellow-400",
    "bg-green-500",
  ];

  return (
    <div className="fixed inset-0 bg-[#202124] text-white flex flex-col items-center justify-center z-50">
      <div className="absolute top-5 w-full flex justify-between px-4">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#3c4043] flex items-center justify-center"
        >
          <IoChevronBack size={20} />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#3c4043] flex items-center justify-center">
          🌐
        </button>
      </div>
      <section className="flex flex-col justify-center items-center">
        <div className="text-xl mb-8 font-medium">Speak now</div>
        <div className="flex gap-3 mb-10">
          {googleColors.map((color, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${color}`}
              animate={{ y: ["0%", "-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 1, delay: index * 0.2 }}
            />
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-full text-sm text-gray-300">
          🎵 Search a song
        </button>
      </section>
    </div>
  );
};
