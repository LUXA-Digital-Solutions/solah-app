import { CalendarFormat, TimeFormat } from "../types";

// ---- Format Time ----
export const formatTime = (d: Date, timeFormat: TimeFormat = "24hr"): string => {
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

export const formatDate = (
  d: Date,
  calendar: CalendarFormat = "hijri",
  locale: string = "en-US",
  output: "full" | "collapse" = "full"
): string => {
  const useHijri = calendar === "hijri";

  const opts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    year: "numeric",
    ...(output === "full" ? { month: "long" } : { month: "numeric", numberingSystem: "latn" }),
    ...(useHijri ? { calendar: "islamic" } : {}),
  };

  const fmt = new Intl.DateTimeFormat(locale, opts);
  const parts = fmt.formatToParts(d);

  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const year = parts.find((p) => p.type === "year")?.value ?? "";

  return output === "full"
    ? `${day} ${month}, ${year}` // e.g., "4 Rajab, 1447"
    : `${day}/${month}/${year}`; // e.g., "4/7/1447"
};
