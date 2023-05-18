"use client";

import ErrorTemplate from "./components/Templates/Error";

const Error = ({ error, reset }) => {
  return <ErrorTemplate error={error} reset={reset} />;
};

export default Error;