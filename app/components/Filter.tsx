import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { useCountryContext } from "../context/CountryContext";

export default function Filter() {
  const { setFilteredCountries, allCountries } = useCountryContext();

  const handleChange = (value: string) => {
    const filtered = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="flex flex-row items-center w-80 border-2 border-gray-400 rounded-lg h-10 bg-white pl-4 ">
      <MagnifyingGlass size={22} />

      <input
        className="h-full w-full rounded-lg px-4 border-none outline-none"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
}
