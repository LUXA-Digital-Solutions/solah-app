import type { AdhkarGroup } from "./types";

export const adhkarDuring: AdhkarGroup = {
  type: "during",
  items: [
    {
      id: "d1",
      title: "Opening supplication (Du‘ā’ al-Istiftāḥ)",
      entries: [
        {
          arabicText:
            "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ",
          transliteration:
            "Subḥānaka Allāhumma wa biḥamdik, wa tabāraka ismuk, wa ta‘ālā jadduk, wa lā ilāha ghayruk",
          translation: {
            en: "Glory is to You, O Allah, and praise; blessed is Your Name, exalted is Your Majesty, and there is no deity besides You.",
          },
        },
      ],
    },
    {
      id: "d2",
      title: "While bowing (Rukū‘)",
      entries: [
        {
          arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
          transliteration: "Subḥāna rabbiyal-‘aẓīm",
          translation: { en: "Glory be to my Lord, the Magnificent." },
        },
      ],
    },
    {
      id: "d3",
      title: "When rising from Rukū‘",
      entries: [
        {
          arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
          transliteration: "Sami‘a Allāhu liman ḥamidah",
          translation: { en: "Allah hears those who praise Him." },
        },
        {
          arabicText: "رَبَّنَا وَلَكَ الْحَمْدُ",
          transliteration: "Rabbana wa laka al-ḥamd",
          translation: { en: "Our Lord, and to You is all praise." },
        },
      ],
    },
    {
      id: "d4",
      title: "While prostrating (Sujūd)",
      entries: [
        {
          arabicText: "سُبْحَانَ رَبِّيَ الأَعْلَى",
          transliteration: "Subḥāna rabbiyal-a‘lā",
          translation: { en: "Glory be to my Lord, the Most High." },
        },
      ],
    },
    {
      id: "d5",
      title: "Between the two prostrations",
      entries: [
        {
          arabicText:
            "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي، اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
          transliteration:
            "Rabbī ighfir lī, Rabbī ighfir lī, Allāhumma ighfir lī warḥamnī wahdinī wa ‘āfinī warzuqnī",
          translation: {
            en: "My Lord, forgive me. My Lord, forgive me. O Allah, forgive me, have mercy on me, guide me, grant me health, and provide for me.",
          },
        },
      ],
    },
    {
      id: "d6",
      title: "After Tashahhud (before Taslīm)",
      entries: [
        {
          arabicText:
            "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
          transliteration:
            "Allāhumma innī a‘ūdhu bika min ‘adhābi jahannam, wa min ‘adhābi al-qabr, wa min fitnati al-maḥyā wa al-mamāt, wa min sharri fitnati al-masīḥ ad-dajjāl",
          translation: {
            en: "O Allah, I seek refuge in You from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah.",
          },
        },
      ],
    },
  ],
};
