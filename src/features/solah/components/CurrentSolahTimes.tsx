import { CloudMoon, CloudSun, MoonStar, Sun, Sunset } from "lucide-react-native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors, spacing, borderRadius } from "@/shared/styles";

interface CurrentSolahTimesProps {
  selectedDate: Date;
}

export function CurrentSolahTimes({ selectedDate }: CurrentSolahTimesProps) {
  const solahTimes = [
    { name: "Subhi", time: "05:45", icon: CloudMoon },
    { name: "Dhuhr", time: "12:55", icon: Sun },
    { name: "Asr", time: "17:05", icon: CloudSun },
    { name: "Maghrib", time: "19:00", icon: Sunset },
    { name: "Isha'", time: "20:05", icon: MoonStar },
  ];

  const currentPrayer = "Maghrib";

  const dayName = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const dayNumber = selectedDate.getDate();
  const year = selectedDate.getFullYear().toString().slice(-2);

  return (
    <View style={styles.container}>
      {/* Header section */}
      <Text style={styles.dateText}>
        {dayName} • {dayNumber}/{year}
      </Text>
      <Text style={styles.locationText}>Ilorin, Kwara State</Text>

      {/* Solah Times List */}
      {solahTimes.map(({ name, time, icon: Icon }) => {
        const isActive = name === currentPrayer;

        return (
          <View
            key={name}
            style={[styles.row, isActive && { backgroundColor: colors.background.brand.primary }]}
          >
            <View style={styles.left}>
              <Icon size={20} color="#FDFDFD" style={{ marginRight: 8 }} />
              <Text
                style={[
                  {
                    color: "#FDFDFD",
                    marginLeft: spacing.sm,
                    fontFamily: "Figtree",
                    fontSize: 14,
                    fontWeight: "600",
                    lineHeight: 20,
                    letterSpacing: 0,
                  },
                ]}
              >
                {name}
              </Text>
            </View>

            <Text
              style={[
                {
                  color: "#FDFDFD",
                  fontFamily: "Figtree",
                  fontSize: 14,
                  fontWeight: "600",
                  lineHeight: 20,
                  letterSpacing: 0,
                },
              ]}
            >
              {time}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 150, // Added space for SolahCalendar above
    position: "relative",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#333333",
    opacity: 1,
    gap: 16,
    zIndex: 1, // Ensure proper layering
  },
  dateText: {
    fontFamily: "Figtree",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#FDFDFD",
    opacity: 0.9,
  },
  locationText: {
    fontFamily: "Figtree",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#FDFDFD",
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius[7],
    marginVertical: 2,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
});
