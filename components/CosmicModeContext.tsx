"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CosmicMode = "dark" | "light";

interface CosmicContextValue {
  mode: CosmicMode;
  toggleMode: () => void;
}

const CosmicModeContext = createContext<CosmicContextValue>({
  mode: "dark",
  toggleMode: () => {},
});

export function CosmicModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<CosmicMode>("dark");

  useEffect(() => {
    document.body.classList.toggle("light-cosmic", mode === "light");
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <CosmicModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </CosmicModeContext.Provider>
  );
}

export const useCosmicMode = () => useContext(CosmicModeContext);
