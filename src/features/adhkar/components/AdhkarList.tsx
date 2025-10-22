import { useMemo } from "react";
import { FlatList, View } from "react-native";

import { AdhkarItem, adhkarData, AdhkarType } from "@/features-adhkar/data";

import { adhkarListStyles as styles } from "./AdhkarList.styles";
import { AdhkarListItem } from "./AdhkarListItem";

export type AdhkarListProps = {
  type: AdhkarType;
};

export const AdhkarList = ({ type }: AdhkarListProps) => {
  const items: AdhkarItem[] = useMemo(() => {
    const group = adhkarData.find((g) => g.type === type);
    return group ? group.items : [];
  }, [type]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={items}
        renderItem={({ item }) => <AdhkarListItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};
