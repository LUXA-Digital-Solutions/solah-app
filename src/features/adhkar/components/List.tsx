import { useMemo } from "react";
import { FlatList, View } from "react-native";

import { AdhkarItem, adhkarData, AdhkarType } from "@/features-adhkar/data";

import { listStyles as styles } from "./List.styles";
import { ListItem } from "./ListItem";

export type AdhkarListProps = {
  type: AdhkarType;
};

export const List = ({ type }: AdhkarListProps) => {
  const items: AdhkarItem[] = useMemo(() => {
    const group = adhkarData.find((g) => g.type === type);
    return group ? group.items : [];
  }, [type]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem key={`${item.type}-${item.id}`} item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};
