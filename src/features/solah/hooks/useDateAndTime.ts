import { useState, useEffect } from "react";

export interface DateAndTime {
  date: string;
  time: string;
}

const formatDate = (d: Date): string =>
  d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const formatTime = (d: Date): string =>
  d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

export const useDateAndTime = (): DateAndTime => {
  const now = new Date();
  const [date, setDate] = useState(() => formatDate(now));
  const [time, setTime] = useState(() => formatTime(now));

  useEffect(() => {
    // update time every second
    const timeInterval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    // update date every minute (midnight rollover)
    const dateInterval = setInterval(() => {
      setDate(formatDate(new Date()));
    }, 60000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dateInterval);
    };
  }, []);

  return { date, time };
};
