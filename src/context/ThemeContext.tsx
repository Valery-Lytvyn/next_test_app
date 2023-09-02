"use client";
import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  toggle: () => void;
  mode: "dark" | "light";
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggle: () => {},
  mode: "dark",
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
