import { View, Text } from "react-native";

interface CurrentSolahTimesProps {
  selectedDate: Date;
}

export function CurrentSolahTimes({ selectedDate }: CurrentSolahTimesProps) {
  return (
    <View style={{ padding: 4 }}>
      <Text>CurrentSolahTimes</Text>
      <Text>SelectedDate: {selectedDate.toISOString()}</Text>
    </View>
  );
}
