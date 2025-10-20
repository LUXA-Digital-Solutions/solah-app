import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";

import { background, context } from "@/shared/styles";

export type AdhkarCardProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
  variant?: "large" | "small";
  height?: DimensionValue;
  bgStyle: "light" | "dark";
  illustration?: ImageSourcePropType;
};

export const Card = ({
  title,
  subtitle,
  onPress,
  variant = "small",
  height = 126,
  bgStyle = "light",
  illustration,
}: AdhkarCardProps) => {
  const isLight = bgStyle === "light";

  const titleColor = isLight ? context.brand.secondary : context.brand.inverted;

  const subtitleColor = isLight ? context.brand.primary : context.default.inverted;

  const bgColor = isLight ? background.brand.inverted : background.brand.secondary;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { height, backgroundColor: bgColor },
        variant === "large" && styles.largeContainer,
      ]}
    >
      {/* Text Content */}
      <View style={styles.textContainer}>
        <View
          style={[
            styles.textWrapper,
            isLight ? styles.lightCardsTextWrapper : styles.darkCardTextWrapper,
          ]}
        >
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          <Text
            style={[styles.subtitle, { color: subtitleColor }, !isLight && styles.darkCardSubtitle]}
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
            isLight ? styles.lightCardsIllustration : styles.darkCardIllustration,
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
    padding: 4,
    borderRadius: 10,
    margin: 0,
    overflow: "hidden",
    width: "100%",
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
  darkCardTextWrapper: {
    top: "30%",
    transform: [{ translateY: -20 }],
  },
  darkCardSubtitle: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: "semibold",
  },
  lightCardsTextWrapper: {
    top: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    flexWrap: "wrap",
    fontWeight: "semibold",
  },
  illustration: {
    position: "absolute",
    right: -10,
    zIndex: 1,
  },
  darkCardIllustration: {
    width: 100,
    bottom: -30,
  },
  lightCardsIllustration: {
    width: 90,
    bottom: 0,
  },
  largeContainer: {
    // Large container styles
  },
});
