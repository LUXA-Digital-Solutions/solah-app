import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";

import { colors } from "@/shared/styles";

export type AdhkarCardProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
  variant?: "large" | "small";
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  illustration?: ImageSourcePropType;
};

export const Card = ({
  title,
  subtitle,
  onPress,
  variant = "small",
  width = 182,
  height = 126,
  backgroundColor = "#FDFDFD",
  illustration,
}: AdhkarCardProps) => {
  let titleColor: string = colors.primary[400];
  let subtitleColor: string = colors.primary[800];
  const isFirstCard = backgroundColor === colors.primary[700];

  if (isFirstCard) {
    titleColor = colors.primary[100];
    subtitleColor = colors.white;
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { width, height, backgroundColor },
        variant === "large" && styles.largeContainer,
      ]}
    >
      {/* Text Content */}
      <View style={styles.textContainer}>
        <View
          style={[
            styles.textWrapper,
            isFirstCard ? styles.firstCardTextWrapper : styles.otherCardsTextWrapper,
          ]}
        >
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          <Text
            style={[
              styles.subtitle,
              { color: subtitleColor },
              isFirstCard && styles.firstCardSubtitle,
            ]}
          >
            {subtitle}
          </Text>
        </View>
      </View>

      {/* Image */}
      {illustration && (
        <Image
          source={illustration}
          style={[
            styles.illustration,
            isFirstCard ? styles.firstCardIllustration : styles.otherCardsIllustration,
            { height: "100%" },
          ]}
          resizeMode="cover"
        />
      )}
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    padding: 4,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    margin: 0,
    overflow: "hidden",
  },
  textContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  textWrapper: {
    position: "absolute",
    left: 10,
    right: 10,
    zIndex: 2,
  },
  firstCardTextWrapper: {
    top: "30%",
    transform: [{ translateY: -20 }],
  },
  firstCardSubtitle: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: "semibold",
  },
  otherCardsTextWrapper: {
    top: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B37B56",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: "#483020",
    lineHeight: 24,
    flexWrap: "wrap",
    fontWeight: "semibold",
  },
  illustration: {
    position: "absolute",
    right: -10,
    zIndex: 1,
  },
  firstCardIllustration: {
    width: 100,
    bottom: -30,
  },
  otherCardsIllustration: {
    width: 90,
    bottom: 0,
  },
  largeContainer: {
    // Large container styles
  },
});
