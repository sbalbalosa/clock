import React from "react";
import { createContext } from "react";
import useClock from "../hooks/useClock";

export const ClockContext = createContext({ hours: 0, minutes: 0, seconds: 0 });

export default function ServiceProvider({ children }) {
  const clock = useClock();
  return (
    <ClockContext.Provider value={clock}>
      {children}
    </ClockContext.Provider>
  );
}
