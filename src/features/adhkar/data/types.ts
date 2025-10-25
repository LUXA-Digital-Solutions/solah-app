export type AdhkarEntry = {
  arabicText: string;
  transliteration: string;
  translation: {
    en: string;
  };
};

export type AdhkarType = "before" | "during" | "after";

export type AdhkarItem = {
  id: string;
  type: AdhkarType;
  title: string;
  entries: AdhkarEntry[];
};

export type AdhkarGroup = {
  type: AdhkarType;
  items: AdhkarItem[];
};
