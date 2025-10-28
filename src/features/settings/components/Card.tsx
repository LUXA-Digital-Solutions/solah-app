import React from "react";
import { View, Text, ViewStyle } from "react-native";

import { cardStyles } from "./Card.styles";

export type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export const Card: React.FC<CardProps> = ({ title, description, children, style }) => {
  return (
    <View style={[cardStyles.container, style]}>
      {title ? <Text style={cardStyles.title}>{title}</Text> : null}
      {description ? <Text style={cardStyles.description}>{description}</Text> : null}
      <View style={cardStyles.content}>{children}</View>
    </View>
  );
};
