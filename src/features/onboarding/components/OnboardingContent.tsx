import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";

import { context } from "@/shared/styles";

type Props = {
  imgsrc: string;
  title: string;
  description: string;
  imgPos?: "top" | "middle" | "bottom";
};

export function OnboardingContent({ imgsrc, title, description, imgPos = "top" }: Props) {
  const Title = () => (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const Description = () => (
    <View style={styles.textContainer}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );

  const OnboardingImage = () => (
    <View style={styles.imageContainer}>
      <Image source={imgsrc} style={styles.image} />
    </View>
  );

  switch (imgPos) {
    case "top":
      return (
        <View style={styles.container}>
          <OnboardingImage />
          <Title />
          <Description />
        </View>
      );

    case "middle":
      return (
        <View style={styles.container}>
          <Title />
          <OnboardingImage />
          <Description />
        </View>
      );

    case "bottom":
      return (
        <View style={styles.container}>
          <Title />
          <Description />
          <OnboardingImage />
        </View>
      );

    default:
      return (
        <View style={styles.container}>
          <OnboardingImage />
          <Title />
          <Description />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: context.brand.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: context.brand.primary,
    textAlign: "center",
    lineHeight: 20,
  },
});
