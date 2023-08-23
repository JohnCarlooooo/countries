import React from "react";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  return (
    <div className="dark:bg-darkBlue-100  z-10 fixed top-0 w-full flex flex-row justify-between items-center py-6 px-4 desktop:px-16 bg-white shadow-sm">
      <h1 className="font-bold text-sm text-darkBlue-300 dark:text-white">
        Where in the world?
      </h1>
      <DarkModeBtn />
    </div>
  );
};

export default Header;
