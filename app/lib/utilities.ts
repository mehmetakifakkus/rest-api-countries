import { Country } from "@/types";

export const filterCountries = (arr: Country[], search: string, region: string): Country[] => {
  return arr.filter((country: Country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      country.region.toLowerCase().includes(region.toLowerCase())
  });
}

export const createSearchQuery = (search: string, region: string): string => {
  if (search === "" && region === "") return "/";
  else if (search === "") return `?region=${region}`;
  else if (region === "") return `?search=${search}`;
  else return `?search=${search}&region=${region}`;
}
