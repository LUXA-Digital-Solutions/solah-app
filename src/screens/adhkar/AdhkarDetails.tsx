import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TitleBar } from "@/features-adhkar/components";
import { adhkarData, AdhkarItem, AdhkarType } from "@/features-adhkar/data";
import { screenStyle } from "@/shared/styles";

interface AdhkarDetailsProps {
  adhkar_type: AdhkarType;
  id: string;
}

export function AdhkarDetails({ adhkar_type, id }: AdhkarDetailsProps) {
  const { bottom } = useSafeAreaInsets();
  const items = adhkarData.flatMap((group) => group.items).find((item) => item.id === id);

  return (
    <View
      style={{
        ...screenStyle.container,
        backgroundColor: "white",
        paddingBottom: bottom,
      }}
    >
      <TitleBar adhkar_type={adhkar_type} />
      {items ? <WithData items={items} /> : <NoData />}
    </View>
  );
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
