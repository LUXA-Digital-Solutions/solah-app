// useSolah.ts
import { useState, useEffect } from "react";

export interface SolahTime {
  title: string;
  time: string;
}

const STATIC_SOLAH_TIMES: SolahTime[] = [
  { title: "Subhi", time: "05:12" },
  { title: "Zuhr", time: "12:33" },
  { title: "Asr", time: "15:59" },
  { title: "Maghrib", time: "18:01" },
  { title: "Isha'", time: "19:30" },
];

export function useSolahTimes() {
  const [times, setTimes] = useState<SolahTime[]>(STATIC_SOLAH_TIMES);

  // Future reimplementation can fetch or calculate from API
  useEffect(() => {
    // Simulate fetching data
    setTimes(STATIC_SOLAH_TIMES);
  }, []);

  return { times };
}

export function useCurrentSolah() {
  // Temporary static current solah
  const [currentSolah, setCurrentSolah] = useState("Asr");

  useEffect(() => {
    // Simulate fetching data
    setCurrentSolah("Asr");
  }, []);

  return { currentSolah };
}

export function useNextSolah() {
  // Temporary static next solah
  const [nextSolah, setNextSolah] = useState({
    title: "Maghrib",
    time: "19:01",
  });

  useEffect(() => {
    // Simulate fetching data
    setNextSolah({
      title: "Maghrib",
      time: "19:01",
    });
  }, []);

  return { nextSolah };
}
