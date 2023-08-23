import Countries from "@/components/ui/Countries";
import MenuFilter from "@/components/ui/MenuFilter";
import SearchBar from "@/components/ui/SearchBar";
import { countries } from "./api/countries/types";

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
    <main className=" p-4 flex flex-col gap-8 h-screen overflow-y-hidden transition-all duration-300 text-darkBlue-300 dark:text-white bg-lightGray dark:bg-darkBlue-200">
      <SearchBar />
      <MenuFilter />
      <Countries countries={countries} />
    </main>
  );
}
