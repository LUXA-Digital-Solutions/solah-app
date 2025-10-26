import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware";

import { CalendarFormat, TimeFormat } from "@/features-solah/types";

type OnboardingState = {
  calendarFormat: CalendarFormat;
  timeFormat: TimeFormat;
  setCalendarFormat: (calendarFormat: CalendarFormat) => void;
  setTimeFormat: (timeFormat: TimeFormat) => void;
};

export const useSettingsStore = create<OnboardingState>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        // App state
        calendarFormat: "hijri",
        timeFormat: "12hr",

        // Set onboarding status
        setCalendarFormat: (calendarFormat) => {
          set({ calendarFormat: calendarFormat });
        },

        setTimeFormat: (timeFormat) => {
          set({ timeFormat: timeFormat });
        },

        // Add more above as needed
      }),
      {
        name: "settings-storage",
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
