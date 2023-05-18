import { Metadata } from "next";
import Detail from "./detail";
import { getByCode } from "@/app/services/api";

export const metadata: Metadata = {
  title: "Detail",
};

export const dynamic = 'force-static';

type Props = {
  params: { slug: string };
};

export default async function Details({ params: { slug } }: Props) {
  const data = await loadData(slug);
  return <Detail country={data[0]} />;
}

async function loadData(slug: string) {
  try {
    const res = await getByCode(slug);

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}