"use client";
import { country } from "@/app/api/countries/types";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";

interface prop {
  country: country;
}
const Country = ({ country }: prop) => {
  const { search, setSelectedCountry, filter } = useGlobalContext();
  if (
    !country.name ||
    !country.name.toLowerCase().includes(search.toLowerCase()) ||
    (filter && !country.region.toLowerCase().includes(filter.toLowerCase()))
  )
    return null;
  return (
    <div
      className="flex flex-col rounded-md bg-white dark:bg-darkBlue-100 w-full shadow-sm cursor-pointer desktop:w-[300px] desktop:h-[350px] desktop:justify-start"
      onClick={() => {
        setSelectedCountry(country);
      }}
    >
      <div className="w-full h-[175px] relative">
        {country.flag && (
          <Image
            src={country.flag}
            alt={country.name}
            fill
            className="rounded-t-md object-cover"
          />
        )}
      </div>
      <div className="flex flex-col p-6 text-darkBlue-300 dark:text-white">
        <h3 className="font-bold desktop:text-xl desktop:pb-4">
          {country.name}
        </h3>
        <p>
          <span className="font-semibold">Population: </span>
          {country.population && (
            <span>{country.population.toLocaleString()}</span>
          )}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          <span>{country.region}</span>
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
