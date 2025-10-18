import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 40,
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
  illustration: {
    width: 280,
    height: 280,
    marginBottom: 16,
    marginTop: 16,
    alignSelf: "center",
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
  progressBarContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "center",
  },
  continueButton: {
    marginBottom: 12,
    width: "100%",
  },
  skipButton: {
    width: "100%",
  },
});
