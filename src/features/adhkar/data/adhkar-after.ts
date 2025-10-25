import type { AdhkarGroup } from "./types";

export const adhkarAfter: AdhkarGroup = {
  type: "after",
  items: [
    {
      id: "1",
      type: "after",
      title: "After finishing the prayer (Tasleem)",
      entries: [
        {
          arabicText: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ",
          transliteration: "Astaghfirullāh, Astaghfirullāh, Astaghfirullāh",
          translation: { en: "I seek Allah’s forgiveness (three times)." },
        },
        {
          arabicText:
            "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
          transliteration:
            "Allāhumma anta as-salām wa minka as-salām, tabārakta yā dhal-jalāli wal-ikrām",
          translation: {
            en: "O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Majesty and Honor.",
          },
        },
      ],
    },
    {
      id: "2",
      type: "after",
      title: "After every obligatory prayer",
      entries: [
        {
          arabicText:
            "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration:
            "Lā ilāha illā Allāh waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu, wa huwa ‘alā kulli shay’in qadīr",
          translation: {
            en: "There is no deity but Allah alone, with no partner. To Him belongs all sovereignty and praise, and He is over all things capable.",
          },
        },
        {
          arabicText: "سُبْحَانَ اللَّهِ (33), الْحَمْدُ لِلَّهِ (33), اللَّهُ أَكْبَرُ (34)",
          transliteration:
            "Subḥānallāh (33 times), Alḥamdulillāh (33 times), Allāhu akbar (34 times)",
          translation: {
            en: "Glory be to Allah (33×), praise be to Allah (33×), and Allah is the Greatest (34×).",
          },
        },
      ],
    },
    {
      id: "3",
      type: "after",
      title: "Ayatul Kursi (after each prayer)",
      entries: [
        {
          arabicText:
            "اللَّهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ... وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
          transliteration:
            "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm ... wa lā ya’ūdhuḥu ḥifẓuhumā wa huwa al-‘aliyyu al-‘aẓīm",
          translation: {
            en: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of [all] existence... His preservation of them tires Him not, and He is the Most High, the Most Great. (Al-Baqarah 2:255)",
          },
        },
      ],
    },
  ],
};

export const totalAdhkarAfter = adhkarAfter.items.length;
