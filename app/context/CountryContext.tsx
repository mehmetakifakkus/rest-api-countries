// create a context for topics
"use client";
import { Country } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { getAllCountries } from "../lib/countries";

export type CountryContextType = {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  setRegion: string;
  setSetRegion: Dispatch<SetStateAction<string>>;
  allCountries: Country[];
  setAllCountries: Dispatch<SetStateAction<Country[]>>;
  filteredCountries: Country[];
  setFilteredCountries: Dispatch<SetStateAction<Country[]>>;
};

const CountryContext = createContext<CountryContextType>({
  searchKey: "",
  setSearchKey: () => {},
  setRegion: "",
  setSetRegion: () => {},
  allCountries: [],
  setAllCountries: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
});

// create a provider for components to consume and subscribe to changes
export const CountryProvider = ({ children }: any) => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [setRegion, setSetRegion] = useState<string>("");
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(allCountries);

  const valueObj: CountryContextType = {
    searchKey,
    setSearchKey,
    setRegion,
    setSetRegion,
    allCountries,
    setAllCountries,
    filteredCountries,
    setFilteredCountries,
  };

  return (
    <CountryContext.Provider value={valueObj}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => useContext(CountryContext);
