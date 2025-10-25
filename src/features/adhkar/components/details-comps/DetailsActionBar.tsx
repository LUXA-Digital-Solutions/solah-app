import { View, Pressable, Image, Alert } from "react-native";

import { AdhkarItem } from "@/features-adhkar/data";

import { detailsActionBarStyles as styles } from "./DetailsActionBar.styles";

const iconPlay = require("@/assets/adhkar-icons/play.png");
const iconShare = require("@/assets/adhkar-icons/share.png");
const iconStar = require("@/assets/adhkar-icons/Star.png");

export type DetailsActionBarProps = {
  item: AdhkarItem;
};

export const DetailsActionBar = ({ item }: DetailsActionBarProps) => {
  const onShare = () => Alert.alert("Share", `Share adhkar ${item.id} (to be implemented)`);
  const onFavorite = () =>
    Alert.alert("Favorite", `Favorite adhkar ${item.id} (to be implemented)`);
  const onPlay = () => Alert.alert("Play", `Play adhkar ${item.id} (to be implemented)`);

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
