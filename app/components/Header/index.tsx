"use client";

import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="w-full flex justify-center pt-8 pb-6 dark:bg-darkModeElement bg-white shadow-base">
      <div className="flex justify-between align-center xl:w-80 lg:w-64 md:w-48 sm:w-40 w-16">
        <span className="font-bold sm:text-2xl text-base">{title}</span>
        {children}
      </div>
    </header>
  );
};

export default Header;
