"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";

const MenuFilter = () => {
  const { selectedCountry, filter, setFilter } = useGlobalContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const filters = ["Africa", "America", "Asia", "Europe", "Oceania"];

  if (selectedCountry) return null;
  return (
    <div className="relative z-20">
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className="bg-white dark:bg-darkBlue-100 py-4 px-6 w-56 flex flex-row justify-between items-center rounded-md shadow-sm"
      >
        <span className="text-sm text-darkBlue-300 font-semibold dark:text-white">
          {filter === "" ? "Filter by Region" : filter}
        </span>
        <svg
          height="16"
          viewBox="0 0 48 48"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-white "
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
            className=" absolute bg-white dark:bg-darkBlue-100 my-1 flex flex-col gap-2 py-4 px-6 w-56 rounded-md shadow-sm"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setFilter(filter);
                }}
                className="text-sm text-darkBlue-300 dark:text-white font-semibold text-left"
              >
                {filter}
              </button>
            ))}
            <div className="h-[1px] w-full bg-gray-200 dark:text-white"></div>
            <button
              onClick={() => {
                setFilter("");
              }}
              className="text-sm text-darkBlue-300 font-semibold text-left dark:text-white"
            >
              Display all
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuFilter;
