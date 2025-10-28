import React from "react";
import { View, Text, Pressable } from "react-native";

import { itemStyles } from "./Item.styles";

export type ItemProps = {
  label: string;
  value?: string;
  onPress?: () => void;
  disabled?: boolean;
  rightAccessory?: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({
  label,
  value,
  onPress,
  disabled = false,
  rightAccessory,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [itemStyles.container, pressed && itemStyles.pressed]}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <View style={itemStyles.left}>
        <Text style={itemStyles.label}>{label}</Text>
      </View>

      <View style={itemStyles.right}>
        {value ? <Text style={itemStyles.value}>{value}</Text> : null}
        {rightAccessory ? rightAccessory : null}
      </View>
    </Pressable>
  );
};
