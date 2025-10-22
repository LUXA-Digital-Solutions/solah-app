import { View, Text } from "react-native";

import { adhkarData, AdhkarItem } from "@/features-adhkar/data";

interface DetailsProps {
  id: string;
}

export function Details({ id }: DetailsProps) {
  const items = adhkarData.flatMap((group) => group.items).find((item) => item.id === id);

  return <>{items ? <WithData items={items} /> : <NoData />}</>;
}

const WithData = ({ items }: { items: AdhkarItem }) => {
  const { title, entries } = items;
  return (
    <>
      <Text>Details for {title}</Text>
      {entries.map((entry, index) => (
        <View key={index}>
          <Text>{entry.arabicText}</Text>
          <Text>{entry.transliteration}</Text>
          <Text>{entry.translation.en}</Text>
        </View>
      ))}
    </>
  );
};

const NoData = () => {
  return (
    <View>
      <Text>No data</Text>
    </View>
  );
};
