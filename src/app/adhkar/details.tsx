import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import { adhkarData } from "@/features-adhkar/data";

function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const items = adhkarData.flatMap((group) => group.items).find((item) => item.id === id);

  if (!items) {
    return (
      <View>
        <Text>No item found.</Text>
      </View>
    );
  }

  const { title, entries } = items;

  return (
    <View>
      <Text>Details for {title}</Text>
      {entries.map((entry, index) => (
        <View key={index}>
          <Text>{entry.arabicText}</Text>
          <Text>{entry.transliteration}</Text>
          <Text>{entry.translation.en}</Text>
        </View>
      ))}
    </View>
  );
}

export default Details;
