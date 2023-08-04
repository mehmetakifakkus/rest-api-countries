"use client";

import React, { useEffect } from "react";
import CountryCart from "./components/CountryCart";
import Filter from "./components/Filter";
import { getAllCountries } from "./lib/countries";
import { Country } from "@/types";
import Link from "next/link";
import RegionSelector from "./components/RegionSelector";
import { useSearchParams } from "next/navigation";
import { filterCountries } from "./lib/utilities";

export default function HomePage() {
  const [allCountries, setAllCountries] = React.useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = React.useState<Country[]>(
    []
  );

  const [regions, setRegions] = React.useState<Set<string>>(new Set());
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const region = searchParams.get("region") || "";

  useEffect(() => {
    getAllCountries().then((res) => {
      setAllCountries(res as Country[]);
      setRegions(new Set(res?.map((country) => country.region)));
    });
  }, []);

  useEffect(() => {
    const filteredCountries = filterCountries(
      allCountries,
      searchValue,
      region
    );
    setFilteredCountries(filteredCountries);
  }, [allCountries, searchValue, region]);

  return (
    <main className="py-32 min-h-[100vh] bg-slate-100 dark:bg-slate-500 px-2 md:px-20">
      <div className="flex justify-between items-center mb-10 mx-4 gap-2">
        <Filter defaultValue={searchValue || ""} />
        <RegionSelector regions={regions} defaultSelected={region || ""} />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredCountries?.map((country) => (
          <Link href={`/${country.name.common}`} key={country.name.common}>
            <CountryCart key={country.name.common} country={country} />
          </Link>
        ))}
      </div>
      {filteredCountries === null && (
        <div className="h-[100vh] mx-auto mt-[20vh]">
          <p className="text-3xl text-gray-700 dark:text-gray-100 font-bold text-center">
            loading...
          </p>
        </div>
      )}
      {filteredCountries?.length === 0 && (
        <div className="h-[100vh] mx-auto mt-[20vh]">
          <p className="text-3xl text-gray-700 dark:text-gray-100 font-bold text-center">
            No country found with these filters!
          </p>
        </div>
      )}
    </main>
  );
}
