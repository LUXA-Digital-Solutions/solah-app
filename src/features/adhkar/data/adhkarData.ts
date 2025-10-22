export type AdhkarType = "before" | "during" | "after";

export type AdhkarItem = {
  id: string;
  title: string;
  entries: string[]; // actual adhkar strings (placeholder)
};

export type AdhkarGroup = {
  type: AdhkarType;
  items: AdhkarItem[];
};

export const adhkarData: AdhkarGroup[] = [
  {
    type: "before",
    items: [
      {
        id: "b1",
        title: "When starting ablution",
        entries: ["SubhanAllah", "Alhamdulillah", "Allahu Akbar"],
      },
      { id: "b2", title: "Upon completing ablution", entries: ["Astaghfirullah", "SubhanAllah"] },
      {
        id: "b3",
        title: "Going to the Mosque",
        entries: ["La ilaha illa Allah", "Allahu Akbar", "SubhanAllah"],
      },
      { id: "b4", title: "Upon entering the mosque", entries: ["SubhanAllah"] },
      { id: "b5", title: "Upon leaving the mosque", entries: ["SubhanAllah", "Alhamdulillah"] },
      {
        id: "b6",
        title: "Supplications related to the adhaan (Call to prayer)",
        entries: ["Dua 1", "Dua 2", "Dua 3"],
      },
    ],
  },
  {
    type: "during",
    items: [
      {
        id: "d1",
        title: "Supplication at the start of the prayer (after takbeer)",
        entries: ["Dua A"],
      },
      {
        id: "d2",
        title: "While bowing in prayer (Rukoo’)",
        entries: ["Dua B", "Dua C", "Dua D", "Dua E"],
      },
      { id: "d3", title: "Upon rising from the bowing position", entries: ["Dua F", "Dua G"] },
      {
        id: "d4",
        title: "Whilst prostrating (sujoood)",
        entries: ["Dua H", "Dua I", "Dua J", "Dua K"],
      },
      { id: "d5", title: "Between the two prostrations", entries: ["Dua L", "Dua M"] },
      {
        id: "d6",
        title: "When prostrating due to recitation of the Qur'an",
        entries: ["Dua N", "Dua O", "Dua P"],
      },
      {
        id: "d7",
        title: "The Tashahuud",
        entries: ["Dua Q", "Dua R", "Dua S", "Dua T", "Dua U", "Dua V"],
      },
      { id: "d8", title: "Prayer upon the Prophet after Tashahuud", entries: ["Dua W", "Dua X"] },
      {
        id: "d9",
        title: "Supplication said after the last Tashahuud before teslim",
        entries: ["Dua Y", "Dua Z", "Dua AA"],
      },
    ],
  },
  {
    type: "after",
    items: [
      {
        id: "a1",
        title: "Remembrance after teslim",
        entries: [
          "Dua 1",
          "Dua 2",
          "Dua 3",
          "Dua 4",
          "Dua 5",
          "Dua 6",
          "Dua 7",
          "Dua 8",
          "Dua 9",
          "Dua 10",
        ],
      },
      {
        id: "a2",
        title: "Qunoot Al-Witr",
        entries: ["Dua 1", "Dua 2", "Dua 3", "Dua 4", "Dua 5", "Dua 6", "Dua 7"],
      },
      {
        id: "a3",
        title: "Dua for Lailat-ul-Qadr (Night of Decree)",
        entries: ["Dua 1", "Dua 2", "Dua 3"],
      },
    ],
  },
];
