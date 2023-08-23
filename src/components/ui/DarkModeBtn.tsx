"use client";
import React from "react";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";

const DarkModeBtn = () => {
  const { darkMode, setDarkMode } = useGlobalContext();
  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className="dark:text-white flex flex-row items-center justify-center gap-2 p-2 rounded text-darkBlue-300"
    >
      <svg
        height={14}
        width={14}
        id="Layer_2"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className="dark:fill-white dark:stroke-white"
      >
        <path d="M30.8374,17.32389c-0.49902-0.33691-1.1499-0.34082-1.65576-0.0127c-1.69189,1.10156-3.66064,1.68359-5.69336,1.68359  c-5.78076,0-10.48389-4.70313-10.48389-10.4834c0-2.03223,0.58252-4.00098,1.68408-5.69336  c0.32813-0.50488,0.32324-1.15625-0.0127-1.65625c-0.33594-0.49902-0.93457-0.74707-1.5293-0.63477  C5.81836,1.94303,0.5,8.39615,0.5,15.87076c0,8.61816,7.01074,15.62891,15.62842,15.62891  c7.47461,0,13.92773-5.31836,15.34424-12.64746C31.58692,18.26139,31.33692,17.65982,30.8374,17.32389z M16.12842,28.49967  C9.16504,28.49967,3.5,22.83463,3.5,15.87076c0-4.9209,2.85254-9.29395,7.11084-11.36426  c-0.40039,1.28711-0.60645,2.63477-0.60645,4.00488c0,7.43457,6.04883,13.4834,13.48389,13.4834  c1.37012,0,2.71826-0.20605,4.00488-0.60645C25.42334,25.64713,21.04981,28.49967,16.12842,28.49967z" />
      </svg>
      <span className="font-semibold text-sm">Dark Mode</span>
    </button>
  );
};

export default DarkModeBtn;
