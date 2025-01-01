"use client";
import { createContext, useContext, useState } from "react";

const reservationContext = createContext();
const initialState = { from: undefined, to: undefined };

function ReservationContextProvider({ children }) {
  const [range, setRange] = useState(initialState);

  function resetRange() {
    setRange(initialState);
  }

  return (
    <reservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </reservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(reservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationContextProvider");
  }
  return context;
}

export { ReservationContextProvider, useReservation };
