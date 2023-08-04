"use client";

import React from "react";
import { useThemeContext } from "../context/ThemeContext";

export default function ThemeToogle() {
  const { darkMode, setDarkMode } = useThemeContext();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={() => {
          setDarkMode((prev) => !prev);
        }}
      />
      <div className="w-11 h-6 bg-slate-700 dark:bg-slate-500 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primary-90 peer-checked:bg-primary-90"></div>
      <span className="ml-3 text-sm font-medium text-slate-800 dark:text-slate-50">
        {darkMode ? "Dark" : "Light"}
      </span>
    </label>
  );
}
