"use client";
import React from "react";
import { useGlobalContext } from "../Providers/GlobalStateWrapper";
import Image from "next/image";

const CountryDetails = () => {
  const { selectedCountry, setSelectedCountry, countries } = useGlobalContext();
  if (selectedCountry) {
    const {
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
      flag,
    } = selectedCountry;
    return (
      <div className="flex flex-col px-4 text-darkBlue-300 dark:text-white ">
        <div className="flex justify-start items-center pt-4 pb-16">
          <button
            onClick={() => {
              setSelectedCountry(null);
            }}
            className="shadow-md px-8 py-2 dark:bg-darkBlue-100"
          >
            Back
          </button>
        </div>
        <div className="flex flex-col overflow-y-auto desktop:flex-row  desktop:justify-center desktop:gap-16">
          <div className="w-full desktop:w-[500px] h-auto relative pb-12">
            {flag && (
              <Image
                src={flag}
                alt={name}
                height={600}
                width={600}
                className=""
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl pb-6">{name}</span>
            <div className="flex flex-col desktop:flex-row desktop:justify-start gap-16">
              <div className="flex flex-col">
                <p className="pb-2">
                  <span className="font-semibold text-sm">Native Name: </span>
                  <span className="text-sm">{nativeName}</span>
                </p>
                <p className="pb-2">
                  <span className="font-semibold text-sm">Population: </span>
                  <span className="text-sm">
                    {population ? population.toLocaleString() : 0}
                  </span>
                </p>
                <p className="pb-2">
                  <span className="font-semibold text-sm">Region: </span>
                  <span className="text-sm">{region}</span>
                </p>
                <p className="pb-2">
                  <span className="font-semibold text-sm">Sub Region: </span>
                  <span className="text-sm">{subregion}</span>
                </p>
                <p className="pb-8">
                  <span className="font-semibold text-sm">Capital: </span>
                  <span className="text-sm">{capital}</span>
                </p>
              </div>
              <div>
                <p className="pb-2">
                  <span className="font-semibold text-sm">
                    Top Level Domain:{" "}
                  </span>
                  <span className="text-sm">{topLevelDomain}</span>
                </p>
                <p className="pb-2">
                  <span className="font-semibold text-sm">Currencies: </span>
                  <span className="text-sm">
                    {currencies.map((currency) => currency.name).join(", ")}
                  </span>
                </p>
                <p className="pb-8">
                  <span className="font-semibold text-sm">Languages: </span>
                  <span className="text-sm">
                    {languages.map((language) => language.name).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <div>
              {borders && (
                <div className="flex flex-col mb-2 desktop:flex-row desktop:max-w-[600px] gap-4">
                  <span className="font-semibold text-lg pb-4">
                    Border Countries:
                  </span>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {borders.map((border) => (
                      <button
                        key={border}
                        className="shadow-md w-24 py-2 text-xs dark:bg-darkBlue-100"
                        onClick={() => {
                          const country = countries.find(
                            (c) => c.alpha3Code === border
                          );

                          setSelectedCountry(country || null);
                        }}
                      >
                        {countries
                          ? countries.find((c) => c.alpha3Code === border)?.name
                          : ""}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CountryDetails;
