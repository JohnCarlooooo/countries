"use client";

import { createContext, useContext, useState } from "react";

const defaultValue = { darkMode: false, toggleDarkMode: () => {} };

const ThemeContext = createContext(defaultValue);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode: () => setDarkMode(!darkMode) }}
    >
      <div className={`${darkMode ? "" : " "}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
