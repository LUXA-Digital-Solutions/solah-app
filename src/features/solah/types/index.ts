export type SolahName = "Subhi" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";
export type TimeFormat = "24hr" | "12hr";
export type CalendarFormat = "hijri" | "miladi";

export type SolahMedia = {
  audio?: string; // e.g., "/audio/solah/subhi/ruku.mp3"
  image?: string; // e.g., "/assets/solah/subhi/step-2-ruku.png"
};

export type SolahEntry = {
  arabicText: string;
  transliteration: string;
  translation: {
    en: string;
  };
  media?: SolahMedia;
};

// Each item = one step of the prayer
export type SolahItem = {
  id: string;
  solah: SolahName; // which prayer this step belongs to
  title: string; // step name (e.g., "Qiyām", "Rukūʿ")
  // Optional short instruction for the step (kept outside entries so entries stay focused on adhkar)
  instruction?: {
    en: string;
  }; // concise posture/action guidance for UI
  entries: SolahEntry[]; // dhikr/dua recited in that step
};

export type SolahGroup = {
  solah: SolahName;
  description: {
    en: string;
  };
  illustration: any;
  rakaat: number;
  items: SolahItem[]; // ordered steps; order is by appearance in the array
};
