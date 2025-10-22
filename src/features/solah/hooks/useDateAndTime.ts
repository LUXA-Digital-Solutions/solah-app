// features/solah/hooks/useDateAndTime.ts
import { useEffect, useMemo, useState } from "react";

export interface DateAndTime {
  date: string;
  time: string;
}

type TimeFormat = "24hr" | "12hr";
type Calendar = "hijri" | "miladi";

interface UseDateAndTimeOptions {
  timeFormat?: TimeFormat; // default '24hr'
  calendar?: Calendar; // default 'hijri'
  locale?: string; // default 'en-US'
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
export const useDateAndTime = (options: UseDateAndTimeOptions = {}): DateAndTime => {
  const { timeFormat = "24hr", calendar = "hijri", locale = "en-US" } = options;

  const [current, setCurrent] = useState<Date>(() => new Date());

  // ---- Format Time ----
  const formatTime = (d: Date): string => {
    const minutes = d.getMinutes().toString().padStart(2, "0");

    if (timeFormat === "24hr") {
      const hours = d.getHours().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }

    const hours24 = d.getHours();
    const period = hours24 >= 12 ? "PM" : "AM";
    let hours12 = hours24 % 12;
    if (hours12 === 0) hours12 = 12;
    return `${hours12}:${minutes} ${period}`;
  };

  // ---- Format Date ----
  const tryIntlDate = (d: Date, useHijri: boolean) => {
    try {
      const localeOption = useHijri ? `${locale}-u-ca-islamic` : locale;
      const formatter = new Intl.DateTimeFormat(localeOption, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return formatter.format(d);
    } catch {
      return null;
    }
  };

  // Approximate arithmetic Hijri fallback (for runtimes without Intl islamic calendar)
  const hijriFallback = (d: Date): string => {
    const gY = d.getFullYear();
    const gM = d.getMonth() + 1;
    const gD = d.getDate();

    const a = Math.floor((14 - gM) / 12);
    const y = gY + 4800 - a;
    const m = gM + 12 * a - 3;
    const jd =
      gD +
      Math.floor((153 * m + 2) / 5) +
      365 * y +
      Math.floor(y / 4) -
      Math.floor(y / 100) +
      Math.floor(y / 400) -
      32045;

    const islamicEpoch = 1948439;
    const days = jd - islamicEpoch;
    const islamicYear = Math.floor((30 * days + 10646) / 10631);

    const islamicToJd = (iy: number, im: number, id: number) =>
      id +
      Math.ceil(29.5 * (im - 1)) +
      (iy - 1) * 354 +
      Math.floor((3 + 11 * iy) / 30) +
      islamicEpoch -
      1;

    let month = 1;
    for (let mtest = 1; mtest <= 12; mtest++) {
      const start = islamicToJd(islamicYear, mtest, 1);
      const nextStart = islamicToJd(islamicYear, mtest + 1, 1);
      if (jd >= start && jd < nextStart) {
        month = mtest;
        break;
      }
    }

    const firstDayOfMonth = islamicToJd(islamicYear, month, 1);
    const dayOfMonth = jd - firstDayOfMonth + 1;

    const hijriMonths = [
      "Muharram",
      "Safar",
      "Rabi' al-awwal",
      "Rabi' al-thani",
      "Jumada al-awwal",
      "Jumada al-thani",
      "Rajab",
      "Sha'ban",
      "Ramadan",
      "Shawwal",
      "Dhu al-Qadah",
      "Dhu al-Hijjah",
    ];

    const monthName = hijriMonths[Math.max(0, Math.min(11, month - 1))] ?? `${month}`;
    return `${dayOfMonth} ${monthName} ${islamicYear}`;
  };

  const formatDate = (d: Date): string => {
    const useHijri = calendar === "hijri";
    const intlResult = tryIntlDate(d, useHijri);
    if (intlResult) return intlResult;
    if (useHijri) return hijriFallback(d);

    // Gregorian fallback
    try {
      return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(d);
    } catch {
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }
  };

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

  const time = useMemo(() => formatTime(current), [current, timeFormat]);
  const date = useMemo(() => formatDate(current), [current, calendar, locale]);

  return { date, time };
};
