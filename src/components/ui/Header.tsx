import React from "react";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center py-6 px-4 bg-white shadow-sm">
      <h1 className="font-bold text-sm text-darkBlue-300">
        Where in the world?
      </h1>
      <DarkModeBtn />
    </div>
  );
};

export default Header;
