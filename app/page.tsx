import { Metadata } from "next";
import { getAllCountries } from "./services/api";
import Container from "./components/Container";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Home Page",
};

export default async function Home() {
  const data = await loadData();
  const sortedData = [...data].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });
  return <Container countries={sortedData} />;
}

async function loadData() {
  try {
    const res = await getAllCountries();

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
