import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useContext } from "react";
import { useEffect } from "react";

const DarkModeContext = createContext();
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      const root = window.document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark-mode");
        root.classList.remove("light-mode");
      } else {
        root.classList.add("light-mode");
        root.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
