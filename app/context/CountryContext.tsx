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

export type CountryContextType = {
  allCountries: Country[];
  setAllCountries: Dispatch<SetStateAction<Country[]>>;
  filteredCountries: Country[] | null;
  setFilteredCountries: Dispatch<SetStateAction<Country[] | null>>;
};

const CountryContext = createContext<CountryContextType>({
  allCountries: [],
  setAllCountries: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
});

// create a provider for components to consume and subscribe to changes
export const CountryProvider = ({ children }: any) => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(
    null
  );

  const valueObj: CountryContextType = {
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
