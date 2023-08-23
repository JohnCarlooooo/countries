"use client";
import React from "react";
import ThemeProvider from "./GlobalStateWrapper";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
