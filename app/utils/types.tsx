export type Country = {
  name: {
    common: string;
    nativeName: {
      [key: string] : {
        common: string;
        official: string;
      }
    };
  };
  subregion: string;
  tld: string[];
  region: string;
  population: number;
  capital: string;
  cca3: string;
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  flags: {
    svg: string;
  };
  borders: string[];
};

export type FilterOption = {
  id: number;
  slug: string;
  title: string;
};

export enum COLOR_MODE {
  LIGHT = "light",
  DARK = "dark",
}