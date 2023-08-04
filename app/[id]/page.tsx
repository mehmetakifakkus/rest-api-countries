import { Country, CurrenciesProps, NativeNameProps } from "@/types";
import Image from "next/image";
import { getAllCountries, getCountryById } from "../lib/countries";
import BackButton from "../components/BackButton";
import CountryBorder from "../components/CountryBorder";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  const countries = (await getAllCountries()) as Country[];
  return countries?.map((country) => ({
    idd: country.name.common,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = params;
  const country = (await getCountryById(id))[0];

  let currency = country?.currencies
    ? (Object.values(country?.currencies)[0] as CurrenciesProps)
    : undefined;

  let nativeName = country?.name.nativeName
    ? (Object.values(country?.name.nativeName)[0] as NativeNameProps)
    : undefined;

  return (
    <main className="pt-32 bg-slate-100 dark:bg-slate-500 px-6 sm:px-20 h-[100vh] dark:text-white">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="max-w-[480px]">
          <Image
            className="aspect-video border shadow-lg"
            src={country?.flags.png}
            alt={country?.flags.alt || country?.name.common}
            width={600}
            height={420}
          />
        </div>
        <div className="flex flex-col gap-4 sm:min-w-[400px] md:min-w-[500px]">
          <h1 className="text-4xl font-semibold">{country?.name.common}</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              {nativeName && (
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {nativeName.common}
                </p>
              )}
              <p>
                <span className="font-semibold">Population: </span>
                {country?.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country?.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country?.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country?.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Top level domain: </span>
                {country?.tld[0]}
              </p>
              {currency && (
                <p>
                  <span className="font-semibold">Currencies: </span>
                  {currency.name} - {currency.symbol}
                </p>
              )}
              {country?.languages && (
                <p>
                  <span className="font-semibold">Languages: </span>
                  {Object.values(country?.languages).join(", ")}
                </p>
              )}
            </div>
          </div>
          <CountryBorder country={country} />
        </div>
      </div>
    </main>
  );
}
