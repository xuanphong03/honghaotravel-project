'use client';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import AOSProvider from './AOSProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const [isPositionTop, setIsPositionTop] = useState(true);
  const [showNavigation, setShowNavigation] = useState(false);
  const lastPositionY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentPositionY = window.scrollY;

    if (currentPositionY > lastPositionY.current) {
      setShowHeader(false);
      setIsPositionTop(false);
    } else {
      setShowHeader(true);
    }

    if (currentPositionY <= 0) {
      setIsPositionTop(true);
    }

    lastPositionY.current = currentPositionY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AppContext.Provider
      value={{ showHeader, isPositionTop, showNavigation, setShowNavigation }}
    >
      {children}
    </AppContext.Provider>
  );
}
