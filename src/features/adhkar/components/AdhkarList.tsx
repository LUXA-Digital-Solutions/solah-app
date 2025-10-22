import * as Linking from "expo-linking";
import React, { useMemo } from "react";
import { FlatList, View } from "react-native";

import { AdhkarItem, adhkarData, AdhkarType } from "../data/adhkarData";

import { adhkarListStyles as styles } from "./AdhkarList.styles";
import { AdhkarListItem } from "./AdhkarListItem";

export type AdhkarListProps = {
  type: AdhkarType;
};

export const AdhkarList: React.FC<AdhkarListProps> = ({ type }) => {
  const items: AdhkarItem[] = useMemo(() => {
    const group = adhkarData.find((g) => g.type === type);
    return group ? group.items : [];
  }, [type]);

  const handlePress = (id: string) => {
    const path = `/adhkar/details/${id}`;
    Linking.openURL(path).catch(() => {
      /* fallback: no-op for now */
    });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <AdhkarListItem
            id={item.id}
            title={item.title}
            count={item.entries.length}
            onPress={handlePress}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};
