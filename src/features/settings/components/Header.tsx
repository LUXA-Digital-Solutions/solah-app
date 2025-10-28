import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import { headerStyles } from "./Header.styles";

export type HeaderProps = {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ title, showBack = false, onBackPress }) => {
  return (
    <View style={headerStyles.container}>
      {showBack ? (
        <Pressable
          onPress={onBackPress}
          style={({ pressed }) => [
            headerStyles.backButton,
            pressed && headerStyles.backButtonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Back"
        >
          <Image
            source={require("../../../../assets/adhkar-icons/chev-left.png")}
            style={headerStyles.backIcon}
            resizeMode="contain"
          />
        </Pressable>
      ) : (
        <View style={headerStyles.placeholder} />
      )}

      <Text numberOfLines={1} style={headerStyles.title}>
        {title}
      </Text>

      {/* Right placeholder keeps title centered */}
      <View style={headerStyles.placeholder} />
    </View>
  );
};
