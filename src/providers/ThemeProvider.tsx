"use client";
import React, { useEffect, useState } from "react";
import { Theme, ThemeContext, themes } from "@/hooks/context/ThemeContext";

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes.system);
  const toggleTheme = (): void => {
    const newTheme = theme == themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const contextValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  useEffect(() => {
    const system: Theme =
      (localStorage.getItem("theme") as Theme) ??
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themes.dark
        : themes.light);
    document.documentElement.setAttribute("data-theme", system);
    localStorage.setItem("theme", system);
    setTheme(system);
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
