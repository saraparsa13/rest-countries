"use client";
import Cookies from "universal-cookie";
import { createContext, Dispatch, useEffect, useContext } from "react";
import { COLOR_MODE } from "@/app/utils/types";

const cookie = new Cookies();

type ThemeState = {
  color: COLOR_MODE;
};

export const appInitialState: ThemeState = {
  color: COLOR_MODE.LIGHT,
};

// Action Types
const SET_LIGHT = "SET_LIGHT";
const SET_DARK = "SET_DARK";

// Action Creators
export type SetDarkAction = {
  type: typeof SET_DARK;
  value: COLOR_MODE.DARK;
};

export type SetLightAction = {
  type: typeof SET_LIGHT;
  value: COLOR_MODE.LIGHT;
};

export const setDark = (): SetDarkAction => {
  return {
    type: SET_DARK,
    value: COLOR_MODE.DARK,
  };
};

export const setLight = (): SetLightAction => {
  return {
    type: SET_LIGHT,
    value: COLOR_MODE.LIGHT,
  };
};

export type ThemeActions = SetLightAction | SetDarkAction;

export const ThemeStateContext = createContext<ThemeState>(appInitialState);
ThemeStateContext.displayName = "ThemeStateCtx";
export const ThemeDispatchContext = createContext<
  Dispatch<ThemeActions> | undefined
>(undefined);
ThemeDispatchContext.displayName = "ThemeDispatchCtx";
import { useReducer, ReactNode } from "react";

function reducer(state: ThemeState, action: ThemeActions): ThemeState {
  switch (action.type) {
    case SET_LIGHT:
      return { color: action.value };
    case SET_DARK:
      return {
        color: action.value,
      };
    default:
      return state;
  }
}

type ProviderProps = {
  children: ReactNode;
  initialValue: ThemeState;
};

export const COLOR_MODE_KEY = "color_mode";

// set initial state
const lazyInit = (initialState: ThemeState): ThemeState => {
  const colorMode = cookie.get("color_mode");
  if (colorMode) {
    return { color: colorMode as COLOR_MODE };
  } else if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return { color: COLOR_MODE.DARK };
  } else {
    return initialState;
  }
};

function ThemeProvider({ children, initialValue }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialValue, lazyInit);

  useEffect(() => {
    if (state.color === COLOR_MODE.LIGHT) {
      document.documentElement.classList.remove(COLOR_MODE.DARK);
    }

    if (state.color === COLOR_MODE.DARK) {
      document.documentElement.classList.add(COLOR_MODE.DARK);
    }
  }, [state]);
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export default ThemeProvider;

export const useThemeState = () => {
  const state = useContext(ThemeStateContext);
  if (state === undefined) {
    throw new Error("useThemeState must be used within a ThemeProvider");
  }
  return state;
};

export const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatchContext);
  if (dispatch === undefined) {
    throw new Error("useThemeDispatch must be used within a ThemeProvider");
  }
  return dispatch;
};