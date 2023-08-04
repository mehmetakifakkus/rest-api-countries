"use client";

import React from "react";
import ThemeToogle from "./ThemeToogle";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="h-20 bg-slate-300 dark:bg-slate-700 fixed w-full z-20">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex items-center">
          <div
            className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-50 hover:cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Where in the world?
          </div>
        </div>
        <ThemeToogle />
      </div>
    </div>
  );
}
