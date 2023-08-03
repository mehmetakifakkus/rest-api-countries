"use client";

import React from "react";
import ThemeToogle from "./ThemeToogle";

export default function Navbar() {
  return (
    <div className="h-20 bg-slate-300 dark:bg-slate-700 fixed w-full">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex items-center">
          <div className="text-2xl font-semibold text-slate-700 dark:text-slate-50">
            Where in the world?
          </div>
        </div>
        <ThemeToogle />
      </div>
    </div>
  );
}
