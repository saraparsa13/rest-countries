"use client";

import Link from "next/link";
import Image from "next/image";
import { Country } from "@/app/utils/types";
import { formatNumber } from "@/app/utils";
import reactGA from "@/app/utils/ga";
import gaEvents from "@/app/utils/ga/events";

const Card = (props: Country) => {
  const {
    capital,
    flags: { svg },
    name: { common },
    population,
    region,
    cca3,
  } = props;

  return (
    <Link
      onClick={() => {
        if (reactGA)
          reactGA.event(
            gaEvents.homePage.click.countryCards(
              JSON.stringify({
                countryId: cca3,
                capital,
                name: common,
                population,
              })
            )
          );
      }}
      href={`/details/${cca3.toLowerCase()}`}
    >
      <div className="rounded overflow-hidden shadow-md bg-white dark:bg-darkModeElement">
        <div className="relative aspect-[4/3]">
          <Image
            className="object-cover	object-center"
            src={svg}
            fill
            alt={`flag of ${common}`}
            loading="lazy"
          />
        </div>
        <div className="px-6 pt-6 pb-12  grid gap-2">
          <span className="font-bold text-lg truncate">{common}</span>
          <div className="flex flex-col grid grid-rows-1 gap-3 text-sm">
            <span>
              <span className="font-normal">Population:</span>{" "}
              {population ? formatNumber(population) : "_"}
            </span>
            <span>
              <span className="font-normal">Region:</span> {region ?? "-"}
            </span>
            <span>
              <span className="font-normal">Capital:</span> {capital ?? "-"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
