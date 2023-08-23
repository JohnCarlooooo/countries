"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface defaultProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<defaultProps>({
  darkMode: false,
  setDarkMode: (): boolean => false,
  search: "",
  setSearch: (): string => "",
});

export default function GlobalStateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const className = `${darkMode ? "dark" : " "}`;
  return (
    <GlobalContext.Provider
      value={{ darkMode: darkMode, setDarkMode, search, setSearch }}
    >
      <div className={className}>{children}</div>
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
