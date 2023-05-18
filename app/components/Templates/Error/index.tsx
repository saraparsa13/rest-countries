"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorTemplate = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex justify-center pt-28">
      <div className="xl:w-80 lg:w-64 md:w-48 sm:w-40 flex flex-col items-center gap-2">
        <span className="font-bold text-xl">
          Something went wrong
        </span>
        <button onClick={reset}>Try again</button>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorTemplate;