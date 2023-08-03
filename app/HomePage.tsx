"use client";

import React, { useEffect } from "react";
import CountryCart from "./components/CountryCart";
import { useCountryContext } from "./context/CountryContext";
import Filter from "./components/Filter";
import { getAllCountries } from "./lib/countries";
import { Country } from "@/types";
import Link from "next/link";

export default function HomePage() {
  const { filteredCountries, setAllCountries, setFilteredCountries } =
    useCountryContext();

  const [regions, setRegions] = React.useState<Set<string>>(new Set());

  useEffect(() => {
    getAllCountries().then((res) => {
      setAllCountries(res as Country[]);
      setFilteredCountries(res as Country[]);
      setRegions(new Set(res?.map((country) => country.region)));
    });
  }, [setAllCountries, setFilteredCountries]);

  return (
    <main className="pt-32 bg-slate-100 dark:bg-slate-500 px-20">
      <div className="flex justify-between items-center mb-10 mx-4">
        <Filter />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredCountries?.map((country) => (
          <Link href={`/${country.name.common}`} key={country.name.common}>
            <CountryCart key={country.name.common} country={country} />
          </Link>
        ))}
      </div>
    </main>
  );
}
