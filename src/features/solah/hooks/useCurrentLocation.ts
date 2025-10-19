// useCurrentLocation.ts
import { useState, useEffect } from "react";

export function useCurrentLocation() {
  // Temporary static value (to be replaced later)
  const [location, setLocation] = useState("Nigeria");

  // Example setup for future implementation
  useEffect(() => {
    // This will later fetch user's current location or from app settings
    setLocation("Nigeria");
  }, []);

  return { location };
}
