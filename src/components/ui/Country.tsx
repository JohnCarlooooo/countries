"use client";
import { country } from "@/app/api/countries/types";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";

interface prop {
  country: country;
}
const Country = ({ country }: prop) => {
  const { search } = useGlobalContext();
  if (
    !country.name ||
    !country.name.toLowerCase().includes(search.toLowerCase())
  )
    return null;
  return (
    <div className="flex flex-col rounded-md bg-white w-full shadow-sm">
      <div className="w-full h-auto relative">
        {country.flag && (
          <Image
            src={country.flag}
            alt={country.name}
            height={600}
            width={600}
            className="rounded-t-md"
          />
        )}
      </div>
      <div className="flex flex-col p-6 text-darkBlue-300">
        <h3 className="font-bold">{country.name}</h3>
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
