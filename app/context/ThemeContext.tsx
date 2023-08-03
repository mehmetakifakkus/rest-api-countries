// create a context for topics
"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type TopicContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<TopicContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

// create a provider for components to consume and subscribe to changes
export const ThemeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const valueObj = { darkMode, setDarkMode };

  if (process.browser) {
    // document is not defined in SSR
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  // Whenever the user explicitly chooses light mode
  // localStorage.darkMode = JSON.stringify(darkMode);

  return (
    <ThemeContext.Provider value={valueObj}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
