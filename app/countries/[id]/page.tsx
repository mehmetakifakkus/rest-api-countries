"use client";

import { Country } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../lib/countries";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  const countries = (await getAllCountries()) as Country[];
  console.log(countries);
  return countries?.map((country) => ({
    idd: country.name.common,
  }));
}

export default function Page({ params }: Props) {
  const [country, setCountry] = useState<Country | null>(null);
  const { id } = params;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${id}`).then((res) =>
      res.json().then((data) => {
        setCountry(data[0]);
      })
    );
  }, [id]);

  return (
    <div className="pt-32 px-20">
      <Link href="/" className="mb-4">
        <button className="w-40 border border-slate-300 rounded mb-8 p-1 px-2 text-lg hover:bg-slate-600 hover:text-white shadow-md">
          ← Back
        </button>
      </Link>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="max-w-[480px]">
          <Image
            className="aspect-video border shadow-lg"
            src={country?.flags.png!}
            alt={country?.name.common!}
            width={600}
            height={420}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{country?.name.common}</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Native Name: </span>
                {country?.name.common}
              </p>
              <p>
                <span className="font-bold">Population: </span>
                {country?.population}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country?.region}
              </p>
              <p>
                <span className="font-bold">Sub Region: </span>
                {country?.subregion}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {country?.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Native Name: </span>
                {country?.name.common}
              </p>
              <p>
                <span className="font-bold">Population: </span>
                {country?.population}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country?.region}
              </p>
              <p>
                <span className="font-bold">Sub Region: </span>
                {country?.subregion}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {country?.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
