import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import { detailsNavigatorStyles as styles } from "./DetailsNavigator.styles";

const chevronLeft = require("@/assets/adhkar-icons/chev-left.png");
const chevronRight = require("@/assets/adhkar-icons/chev-right.png");

export type DetailsNavigatorProps = {
  title?: string;
  onPrev?: () => void;
  onNext?: () => void;
};

export const DetailsNavigator: React.FC<DetailsNavigatorProps> = ({ title, onPrev, onNext }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPrev} style={styles.chevronLeft} accessibilityLabel="previous">
        <Image source={chevronLeft} style={{ width: 20, height: 20, tintColor: "#fff" }} />
      </Pressable>

      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Pressable onPress={onNext} style={styles.chevronRight} accessibilityLabel="next">
        <Image source={chevronRight} style={{ width: 20, height: 20, tintColor: "#fff" }} />
      </Pressable>
    </View>
  );
};
