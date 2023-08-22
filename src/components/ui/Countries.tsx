import React from "react";
import { country, countries } from "@/app/api/countries/types";
import Country from "./Country";

interface props {
  countries: countries;
}

const Countries = ({ countries }: props) => {
  return (
    <div className="flex flex-col gap-10 items-center overflow-y-auto px-8">
      {countries.map((detail: country) => (
        <Country country={detail} key={detail.name} />
      ))}
    </div>
  );
};

export default Countries;
