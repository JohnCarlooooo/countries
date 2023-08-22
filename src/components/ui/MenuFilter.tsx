"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuFilter = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className="bg-white py-4 px-6 w-56 flex flex-row justify-between items-center rounded-md shadow-sm z-50"
      >
        <span className="text-sm text-darkBlue-300 font-semibold">
          Filter by Region
        </span>
        <svg
          height="16"
          viewBox="0 0 48 48"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
          <path d="M0-.75h48v48h-48z" fill="none" />
        </svg>
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            onClick={() => {
              setMenuOpen(false);
            }}
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: "100%", opacity: 1 }}
            exit={{ top: 0, opacity: 0 }}
            className="absolute -z-10 bg-white my-1 flex flex-col gap-2 py-4 px-6 w-56 rounded-md shadow-sm"
          >
            <button className="text-sm text-darkBlue-300 font-semibold text-left">
              Africa
            </button>
            <button className="text-sm text-darkBlue-300 font-semibold text-left">
              America
            </button>
            <button className="text-sm text-darkBlue-300 font-semibold text-left">
              Asia
            </button>
            <button className="text-sm text-darkBlue-300 font-semibold text-left">
              Europe
            </button>
            <button className="text-sm text-darkBlue-300 font-semibold text-left">
              Oceania
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuFilter;
