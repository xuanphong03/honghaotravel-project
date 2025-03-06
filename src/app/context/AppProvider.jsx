"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const [isPositionTop, setIsPositionTop] = useState(true);
  const lastPositionY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPositionY = window.scrollY;
      if (currentPositionY > lastPositionY.current) {
        setShowHeader(false);
        setIsPositionTop(false);
      } else {
        setShowHeader(true);
        currentPositionY <= 0 && setIsPositionTop(true);
      }

      lastPositionY.current = currentPositionY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppContext.Provider value={{ showHeader, isPositionTop }}>
      {children}
    </AppContext.Provider>
  );
}
