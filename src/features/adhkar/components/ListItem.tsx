import { useRouter } from "expo-router";
import React, { memo } from "react";
import { View, Text, Pressable } from "react-native";

import { AdhkarItem, AdhkarType } from "@/features-adhkar/data";

import { listItemStyles as styles } from "./ListItem.styles";

export type AdhkarListItemProps = {
  item: AdhkarItem;
  adhkar_type: AdhkarType;
};

export const ListItem = memo(function AdhkarListItem({ item, adhkar_type }: AdhkarListItemProps) {
  const { id, title, entries } = item;
  const count = entries.length;

  const router = useRouter();
  const handlePress = () => router.push(`/adhkar/details?adhkar_type=${adhkar_type}&id=${id}`);

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.75 }]}
      onPress={handlePress}
    >
      <View style={styles.left}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.countText}>({count})</Text>
      </View>
    </Pressable>
  );
});
