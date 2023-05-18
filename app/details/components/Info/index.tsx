"use client";

import { Country } from "@/app/utils/types";
import { capitalize } from "@/app/utils";

type InfoProps = {
  [Property in keyof Country]?: string | number;
};

const Info = (props: InfoProps) => {
  return (
    <ul className="leading-8">
      {Object.entries(props).map((entry, index) => (
        <li key={index}>
          <span className="font-normal">{capitalize(entry[0].replace(/([A-Z]+)/g, " $1"))}: </span>
          {entry[1]}
        </li>
      ))}
    </ul>
  );
};

export default Info;