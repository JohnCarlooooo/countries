"use client";
import React from "react";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";

const SearchBar = () => {
  const { search, setSearch, selectedCountry } = useGlobalContext();
  if (selectedCountry) return null;
  return (
    <div className="desktop:w-[450px] flex flex-row justify-start items-center bg-white dark:bg-darkBlue-100 py-4 px-8 rounded-md shadow-sm gap-6">
      <svg
        className="text-darkGray dark:fill-white dark:stroke-white"
        viewBox="0 0 24 24"
        height={20}
        width={20}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      <input
        className="flex-1 text-sm text-darkGray font-semibold outline-none dark:bg-darkBlue-100 dark:text-white"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
