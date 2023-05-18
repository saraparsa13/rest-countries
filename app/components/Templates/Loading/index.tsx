"use client";

import { CSSProperties, useEffect, useState } from "react";

const LoadingTemplate = () => {
  const [visible, setVisible] = useState(0);

  const updateVisibleIndex = () => {
    setVisible((visible) => (visible < 2 ? visible + 1 : 0));
  };

  const show = (index: number): CSSProperties => ({
    display: visible === index ? "block" : "none",
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      updateVisibleIndex();
    }, 600);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div aria-label="Loading Content" className="w-full flex justify-center pt-28">
      <div className="xl:w-80 lg:w-64 md:w-48 sm:w-40 flex flex-col items-center gap-2">
        <span className="font-bold text-xl" style={show(0)}>
          Loading ...
        </span>
      </div>
    </div>
  );
};

export default LoadingTemplate;