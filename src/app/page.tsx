import Countries from "@/components/ui/Countries";
import MenuFilter from "@/components/ui/MenuFilter";
import SearchBar from "@/components/ui/SearchBar";
import { countries } from "./api/countries/types";
import CountryDetails from "@/components/ui/CountryDetails";

const fetchCountries = async () => {
  const res = await fetch("http://localhost:3000/api/countries", {
    cache: "default",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const countries: countries = await fetchCountries();
  return (
    <main className="p-4 pt-24 h-screen flex-1 flex flex-col gap-8 overflow-y-auto transition-all duration-300 text-darkBlue-300 dark:text-white bg-lightGray dark:bg-darkBlue-200">
      <div className="flex flex-col gap-8 desktop:flex-row desktop:justify-between desktop:px-8">
        <SearchBar />
        <MenuFilter />
      </div>
      <Countries countries={countries} />
      <CountryDetails />
    </main>
  );
}
