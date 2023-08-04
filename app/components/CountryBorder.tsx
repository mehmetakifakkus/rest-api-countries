"use client";

import { Country } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { country: Country };

export default function CountryBorder({ country }: Props) {
  const router = useRouter();
  return (
    country.borders && (
      <>
        <p className="font-bold mt-3 mb-1">Border Countries:</p>
        <div className="flex flex-wrap gap-1">
          {country?.borders.map((border: string) => (
            <span
              key={border}
              className="text-sm bg-slate-200 dark:bg-slate-600 px-3 py-0.5 rounded-lg shadow-md mr-2 mb-2 hover:bg-slate-400 hover:text-white hover:cursor-pointer"
              onClick={() => {
                console.log(border);
                router.push(`/${border}`);
              }}
            >
              {border}
            </span>
          ))}
        </div>
      </>
    )
  );
}
