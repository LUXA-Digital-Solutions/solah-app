import React from "react";
import { View, Text, Pressable } from "react-native";

interface SolahCalendarProps {
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export function SolahCalendar({ setSelectedDate }: SolahCalendarProps) {
  return (
    <View style={{ padding: 4 }}>
      <Text>Solah Calendar</Text>
      <Pressable onPress={() => setSelectedDate(new Date())}>
        <Text>Select Today</Text>
      </Pressable>
    </View>
  );
}
