import { Country } from "@/types";
import Image from "next/image";
import React from "react";

type Props = { country: Country };

export default function CountryCart({ country }: Props) {
  return (
    <div className="h-76 w-60 max-w-[420px] mx-auto rounded-lg shadow-lg dark:shadow-dark bg-slate-50 dark:bg-slate-700 text-gray-700 dark:text-gray-200">
      <Image
        className="h-36 object-cover w-full max-w-[400px] rounded-t-lg"
        src={country.flags.png}
        alt={country.name.common}
        width={200}
        height={200}
      />
      <div className="p-4">
        <div className="h-16">
          <p className="text-lg font-semibold">{country.name.common}</p>
        </div>
        <p className="text-sm mb-1">Population: {country.population}</p>
        <p className="text-sm mb-1">Region: {country.region}</p>
        <p className="text-sm">Capital: {country.capital}</p>
      </div>
    </div>
  );
}
