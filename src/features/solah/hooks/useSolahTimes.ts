// useSolah.ts
import { useState, useEffect, useMemo } from "react";

import { SolahName, TimeFormat } from "@/features-solah/types";

export interface SolahTime {
  title: SolahName;
  time: string;
}

const STATIC_SOLAH_TIMES: SolahTime[] = [
  { title: "Subhi", time: "05:12" },
  { title: "Dhuhr", time: "12:33" },
  { title: "Asr", time: "15:59" },
  { title: "Maghrib", time: "18:01" },
  { title: "Isha", time: "19:30" },
];

// HOOKS

export function useSolahTimes(date: Date = new Date(), timeFormat: TimeFormat = "24hr") {
  const [times, setTimes] = useState<SolahTime[]>(STATIC_SOLAH_TIMES);

  // Future reimplementation can fetch or calculate from API
  useEffect(() => {
    // Simulate fetching data
    setTimes(STATIC_SOLAH_TIMES);
  }, [date, timeFormat]);

  return { times };
}

export function useCurrentSolah() {
  const { times } = useSolahTimes();
  useMinuteTick();

  const currentSolah = useMemo(() => getCurrentAndNextSolah(times).current.title, [times]);

  return { currentSolah };
}

export function useNextSolah() {
  const { times } = useSolahTimes();
  useMinuteTick();

  const nextSolah = useMemo<SolahTime>(() => getCurrentAndNextSolah(times).next, [times]);

  return { nextSolah };
}

// Helper Hook

const useMinuteTick = () => {
  const [, setTick] = useState(0);
  useEffect(() => {
    const bump = () => setTick((x) => x + 1);
    const delay = 60000 - (Date.now() % 60000);
    const t = setTimeout(() => {
      bump();
      const i = setInterval(bump, 60000);
      return () => clearInterval(i);
    }, delay);
    return () => clearTimeout(t);
  }, []);
};

// Helper Function

const parseTimeToMinutes = (time: string): number => {
  const t = time.trim().toUpperCase();
  const match = /^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/.exec(t);
  if (!match) return 0;

  const [, hStr, mStr, period] = match;
  let h = Number(hStr);
  const m = Number(mStr);

  if (period) {
    // 12hr format
    if (period === "AM" && h === 12) h = 0;
    if (period === "PM" && h < 12) h += 12;
  }
  return h * 60 + m;
};

const getCurrentMinutes = (): number => {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
};

const getCurrentAndNextSolah = (times: SolahTime[]) => {
  if (!times.length) {
    const fallback = { title: "Subhi" as SolahName, time: "00:00" };
    return { current: fallback, next: fallback };
  }

  const now = getCurrentMinutes();
  const mins = times.map((t) => parseTimeToMinutes(t.time));
  const futureIdx = mins.findIndex((v) => now < v);

  if (futureIdx === -1) {
    // after last prayer → current = Isha, next = Subhi
    return { current: times[mins.length - 1], next: times[0] };
  }
  if (futureIdx === 0) {
    // before first prayer → current = Isha (yesterday), next = Subhi
    return { current: times[mins.length - 1], next: times[0] };
  }
  return { current: times[futureIdx - 1], next: times[futureIdx] };
};
