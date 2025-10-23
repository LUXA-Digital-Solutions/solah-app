import React from "react";
import { View, Pressable, Image } from "react-native";

import { detailsActionBarStyles as styles } from "./DetailsActionBar.styles";

const iconPlay = require("@/assets/adhkar-icons/play.png");
const iconShare = require("@/assets/adhkar-icons/share.png");
const iconStar = require("@/assets/adhkar-icons/Star.png");

export type DetailsActionBarProps = {
  onShare?: () => void;
  onFavorite?: () => void;
  onPlay?: () => void;
};

export const DetailsActionBar: React.FC<DetailsActionBarProps> = ({
  onShare,
  onFavorite,
  onPlay,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onShare} style={styles.iconButton} accessibilityLabel="share">
        <Image source={iconShare} style={styles.iconImage} />
      </Pressable>

      <Pressable onPress={onPlay} style={styles.iconButton} accessibilityLabel="play">
        <Image source={iconPlay} style={styles.iconImage} />
      </Pressable>

      <Pressable onPress={onFavorite} style={styles.iconButton} accessibilityLabel="favorite">
        <Image source={iconStar} style={styles.iconImage} />
      </Pressable>
    </View>
  );
};
