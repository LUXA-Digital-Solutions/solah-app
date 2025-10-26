import { SolahGroup, SolahName } from "@/features-solah/types";

import { asrGuide } from "./asr";
import { dhuhrGuide } from "./dhuhr";
import { fajrGuide } from "./fajr";
import { ishaGuide } from "./isha";
import { maghribGuide } from "./maghrib";

export const solahGuides: Record<SolahName, SolahGroup> = {
  Subhi: fajrGuide,
  Dhuhr: dhuhrGuide,
  Asr: asrGuide,
  Maghrib: maghribGuide,
  Isha: ishaGuide,
};
