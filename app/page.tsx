import { Country } from "@/types";
import { getAllCountries } from "./lib/countries";
import Image from "next/image";
import CountryCart from "./components/CountryCart";

export default async function Home() {
  const allCountries: Country[] | undefined = await getAllCountries();

  return (
    <main className="pt-32 bg-slate-100 dark:bg-slate-500 px-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allCountries?.map((country) => (
          <CountryCart key={country.name.common} country={country} />
        ))}
      </div>
    </main>
  );
}
