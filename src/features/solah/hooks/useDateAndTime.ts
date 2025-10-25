// features/solah/hooks/useDateAndTime.ts
import { useEffect, useMemo, useState } from "react";

import { CalendarFormat, TimeFormat } from "@/features-solah/types";
import { formatDate, formatTime } from "@/features-solah/utils";

export interface DateAndTime {
  date: string;
  time: string;
}

interface UseDateAndTimeOptions {
  timeFormat?: TimeFormat;
  calendar?: CalendarFormat;
  locale?: string;
}

/**
 * useDateAndTime
 *
 * - Default: timeFormat = '24hr', calendar = 'hijri', locale = 'en-US'
 * - Time shows hours and minutes only (no seconds).
 * - Supports 12hr/24hr formats.
 * - Supports Hijri and Miladi (Gregorian) date formatting; Hijri default.
 * - Efficient: updates aligned to the next minute, then every minute.
 */
export const useDateAndTime = ({
  timeFormat = "24hr",
  calendar = "hijri",
  locale = "en-US",
}: UseDateAndTimeOptions = {}): DateAndTime => {
  const [current, setCurrent] = useState<Date>(new Date());

  // ---- Update aligned to minute boundary ----
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = () => setCurrent(new Date());

    // initial sync immediately
    setCurrent(new Date());

    const nowDt = new Date();
    const msUntilNextMinute = (60 - nowDt.getSeconds()) * 1000 - nowDt.getMilliseconds();

    timeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 60 * 1000);
    }, msUntilNextMinute);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [timeFormat, calendar, locale]);

  const time = useMemo(() => formatTime(current), [current]);
  const date = useMemo(() => formatDate(current), [current]);

  return { date, time };
};
