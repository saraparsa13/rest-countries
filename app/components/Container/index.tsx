"use client";
import { useState } from "react";
import Fuse from "fuse.js";
import Card from "../Card/index";
import Search from "../Search";
import Dropdown from "../DropDown";
import { Country, FilterOption } from "@/app/utils/types";

const options = {
  includeScore: true,
  keys: ["name.common", "region", "capital"],
  threshold: 0.4,
};

export type ContainerProps = {
  countries: Country[];
};

const regions: FilterOption[] = [
  {
    id: 1,
    slug: "africa",
    title: "Africa",
  },
  {
    id: 2,
    slug: "americas",
    title: "America",
  },
  {
    id: 3,
    slug: "asia",
    title: "Asia",
  },
  {
    id: 4,
    slug: "europe",
    title: "Europe",
  },
  {
    id: 5,
    slug: "oceania",
    title: "Oceania",
  },
];

const Container = ({ countries: countriesData }: ContainerProps) => {
  const [countries, setCountries] = useState(countriesData);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const fuse = new Fuse<Country>(countriesData, options);

  const onSearch = (value: string) => {
    if (value.trim().length) {
      const searchResults = fuse.search(value);
      const filteredCountries = searchResults.map((result) => result.item);
      setCountries(filteredCountries);
    } else {
      setCountries(countriesData);
    }
  };

  const onSelectRegion = (region: string) => {
    setCountries(
      countriesData.filter(
        (country) => country.region.toLocaleLowerCase() === region
      )
    );
    setSelectedRegion(region)
  };

  return (
    <div className="w-full flex justify-center">
      <div className="xl:w-80 lg:w-64 md:w-48 sm:w-40">
        <div className="lg:flex grid lg:justify-between lg:gap-auto gap-8 py-12 w-full">
          <Search
            label="Search for a country"
            placeholder="Search for a country…"
            onSearch={onSearch}
          />
          <Dropdown
            title={selectedRegion || "Filter by Region"}
            options={regions}
            onItemSelect={onSelectRegion}
          />
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between lg:gap-y-16 gap-y-8">
          {countries?.map((country) => (
            <Card key={country.cca3} {...country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
