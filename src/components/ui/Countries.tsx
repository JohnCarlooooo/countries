"use client";
import React, { useEffect } from "react";
import { country, countries } from "@/app/api/countries/types";
import Country from "./Country";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";

interface props {
  countries: countries;
}

const Countries = ({ countries }: props) => {
  const { selectedCountry, setCountries } = useGlobalContext();
  useEffect(() => {
    setCountries(countries);
  }, [countries]);

  if (selectedCountry) return null;
  return (
    <div className="flex flex-col gap-10 items-center overflow-y-auto px-8 desktop:flex-row desktop:flex-wrap">
      {countries.map((detail: country) => (
        <Country country={detail} key={detail.name} />
      ))}
    </div>
  );
};

export default Countries;
