import React, { memo } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { adhkarListItemStyles as styles } from "./AdhkarListItem.styles";

export type AdhkarListItemProps = {
  id: string;
  title: string;
  count: number;
  onPress?: (id: string) => void;
};

export const AdhkarListItem = memo(function AdhkarListItem({
  id,
  title,
  count,
  onPress,
}: AdhkarListItemProps) {
  const handlePress = () => {
    if (onPress) onPress(id);
  };

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
