import ENDPOINTS from "./endpoints";

// const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_API_URL = "https://restcountries.com/v3.1/";

const fetcher = (url: string, options?: RequestInit) => {
  return fetch(`${BASE_API_URL}${url}`, options);
};

export const getAllCountries = () =>
  fetcher(ENDPOINTS.all, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 20 },
  });

export const getByCode = (code: string) =>
  fetcher(ENDPOINTS.code(code), {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 20 },
  });