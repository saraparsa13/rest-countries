"use client";
import Cookies from "universal-cookie";
import { MouseEvent } from "react";
import { Switch } from '@headlessui/react'

import Icon from "./Icon";
// import * as S from "./styles";
import {
  useThemeDispatch,
  useThemeState,
  COLOR_MODE_KEY,
  setDark,
  setLight,
} from "../../context/ThemeContext";
import { COLOR_MODE } from "@/app/utils/types";

const cookies = new Cookies();

const ThemeSwitcher = () => {
  const themeState = useThemeState();
  const themeDispatch = useThemeDispatch();

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (themeState.color === COLOR_MODE.LIGHT) {
      cookies.set(COLOR_MODE_KEY, COLOR_MODE.DARK, {
        path: "/",
        sameSite: true,
      });
      themeDispatch(setDark());
    }
    if (themeState.color === COLOR_MODE.DARK) {
      cookies.set(COLOR_MODE_KEY, COLOR_MODE.LIGHT, {
        path: "/",
        sameSite: true,
      });
      themeDispatch(setLight());
    }
  };

  return (
    <button className="flex font-normal items-center sm:gap-3 gap-1" onClick={handleToggle}>
      <Icon title="Switch Color Mode" />
      <span className="sm:text-base text-xs">{themeState.color === COLOR_MODE.LIGHT ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};

export default ThemeSwitcher;