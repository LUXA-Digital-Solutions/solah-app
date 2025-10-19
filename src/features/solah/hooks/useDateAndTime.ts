// useDateAndTime.ts
import { useState, useEffect } from "react";

export function useDateAndTime() {
  // Temporary static values (will be dynamic later)
  const [date, setDate] = useState("11th Rabi’ Ath-Thani 1447");
  const [time, setTime] = useState("18:24");

  // Example setup for future real-time updates
  useEffect(() => {
    // This will be reimplemented later to compute actual date/time
    setDate("11th Rabi’ Ath-Thani 1447");
    setTime("18:24");
  }, []);

  return { date, time };
}
