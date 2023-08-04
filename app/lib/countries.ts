import { Country } from "@/types";

export async function getAllCountries(): Promise<Country[] | undefined> {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok)
    return undefined;

  return res.json();
}

export async function getCountryById(id: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/${id.length === 3 ? `alpha/${id}` : `name/${id}`
    }`
  );

  if (!res.ok)
    return undefined;

  return res.json();
}


