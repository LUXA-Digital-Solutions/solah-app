import { useRouter } from "expo-router";
import React, { memo } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { AdhkarItem } from "@/features-adhkar/data";

import { adhkarListItemStyles as styles } from "./AdhkarListItem.styles";

export type AdhkarListItemProps = {
  item: AdhkarItem;
};

export const AdhkarListItem = memo(function AdhkarListItem({ item }: AdhkarListItemProps) {
  const { id, title, entries } = item;
  const count = entries.length;

  const router = useRouter();
  const handlePress = () => router.push(`/adhkar/details?id=${id}`);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75} onPress={handlePress}>
      <View style={styles.left}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.countText}>({count})</Text>
      </View>
    </TouchableOpacity>
  );
});
