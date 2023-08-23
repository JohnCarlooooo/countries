"use client";

import { countries, country } from "@/app/api/countries/types";
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
  selectedCountry: country | null;
  setSelectedCountry: Dispatch<SetStateAction<country | null>>;
  countries: countries;
  setCountries: Dispatch<SetStateAction<countries | []>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<defaultProps>({
  darkMode: false,
  setDarkMode: (): boolean => false,
  search: "",
  setSearch: (): string => "",
  filter: "",
  setFilter: (): string => "",
  selectedCountry: null,
  setSelectedCountry: (): null => null,
  countries: [],
  setCountries: (): [] => [],
});

export default function GlobalStateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<country | null>(null);
  const [countries, setCountries] = useState<countries | []>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const className = `${darkMode ? "dark" : " "}`;
  return (
    <GlobalContext.Provider
      value={{
        darkMode: darkMode,
        setDarkMode,
        search,
        setSearch,
        selectedCountry,
        setSelectedCountry,
        countries,
        setCountries,
        filter,
        setFilter,
      }}
    >
      <div className={className}>{children}</div>
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
