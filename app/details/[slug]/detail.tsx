"use client";

import Link from "next/link";
import { Country } from "@/app/utils/types";
import { formatNumber } from "@/app/utils";
import Icon from "./Icon";
import Image from "next/image";
import Info from "../components/Info";

export type DetailProps = {
  country: Country;
};

const Detail = (props: DetailProps) => {
  const { country } = props;
  console.log(country.name.nativeName)
  return (
    <div className="w-full flex justify-center">
      <div className="xl:w-80 lg:w-64 md:w-48 sm:w-40 w-16 pb-20">
        <Link
          className="flex flex-row dark:bg-darkModeElement bg-white w-fit px-8 py-2 shadow-xl rounded-md items-center font-light text-base gap-2 sm:my-20 my-10"
          href="/"
        >
          <Icon title="Arrow Back Icon" />
          Back
        </Link>

        <main className="flex lg:flex-row flex-col lg:gap-auto gap-10 justify-between">
          <div className="relative aspect-[4/3] lg:w-2/5 w-full">
            <Image
              className="object-cover"
              fill
              src={country.flags.svg}
              alt={`Flag Of ${country.name}`}
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <span className="lg:text-3xl text-2xl font-bold pb-8">
              {country.name.common}
            </span>
            <div className="flex flex-row gap-20">
              <Info
                nativeName={Object.values(country.name.nativeName)[0].common}
                population={
                  country.population ? formatNumber(country.population) : "-"
                }
                region={country.region || "-"}
                subregion={country.subregion || "-"}
                capital={country.capital || "-"}
              />
              <Info
                tld={
                  country.tld?.length
                    ? country.tld.join(", ")
                    : "-"
                }
                currencies={
                  Object.values(country.currencies).length
                    ? Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : "-"
                }
                languages={
                  Object.values(country.languages).length
                    ? Object.values(country.languages)
                        .map((language) => language)
                        .join(", ")
                    : "-"
                }
              />
            </div>
            <div className="flex mt-16 gap-2 items-center flex-wrap">
              <span className="font-normal">Border Countries:</span>
              <div className="flex gap-2 flex-wrap">
                {country.borders?.length
                  ? country.borders.map((border) => (
                      <Link
                        className="shadow-xxl px-8 py-1 rounded-sm text-sm dark:bg-darkModeElement" 
                        key={border}
                        href={`/details/${border.toLocaleLowerCase()}`}
                      >
                        {border}
                      </Link>
                    ))
                  : "-"}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Detail;
