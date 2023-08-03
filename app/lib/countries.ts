import { Country } from "@/types";

export async function getAllCountries(): Promise<Country[] | undefined> {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok)
    return undefined;

  return res.json();
}