import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  imgsrc: any;
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
      <Image source={imgsrc} style={styles.image} resizeMode="contain" />
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
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
    width: "100%",
  },
  image: {
    width: 280,
    height: 280,
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 16,
    width: "100%",
  },
  title: {
    width: "70%",
    fontFamily: "Figtree",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 34,
    textAlign: "left",
    letterSpacing: 0,
    marginBottom: 16,
    marginTop: 16,
    color: "#333333",
  },
  description: {
    width: "75%",
    fontFamily: "Figtree",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    letterSpacing: 0,
    color: "#333333",
    paddingHorizontal: 0,
    marginBottom: 25,
  },
});
