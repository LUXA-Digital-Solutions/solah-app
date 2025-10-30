import { Image } from "expo-image";
import { useState } from "react";
import { View, StyleSheet, useWindowDimensions, Pressable, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AdhkarCard } from "@/features/guide/components/AdhkarCard";
import { StepDescription } from "@/features/guide/components/StepDescription";
import { StepTitle } from "@/features/guide/components/StepTitle";
import { solahGuides } from "@/features-solah/data";
import { SolahName } from "@/features-solah/types";
import { ProgressBar } from "@/shared/components";
import { emptyScreenStyle, colors, borderRadius, spacing, borderWidth } from "@/shared/styles";

interface SolahGuideProps {
  solahName: SolahName;
}

export function SolahGuide({ solahName }: SolahGuideProps) {
  const [GuideIndex, setGuideIndex] = useState(0);
  const totalSteps = solahGuides[solahName].items.length;

  const items = solahGuides[solahName].items[GuideIndex];
  const source = items.entries[0]?.media?.image;
  const windowWidth = useWindowDimensions().width;

  const progressPercent = (GuideIndex / (totalSteps - 1)) * 100;

  const handleNext = () => {
    if (GuideIndex < totalSteps - 1) {
      setGuideIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (GuideIndex > 0) {
      setGuideIndex((prev) => prev - 1);
    }
  };

  return (
    <SafeAreaView
      style={[emptyScreenStyle.container, { marginTop: spacing.l, marginBottom: spacing.l }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  Header with Progress Bar */}
        <View style={styles.header}>
          <Text style={styles.stepText}>
            Step {GuideIndex + 1}/{totalSteps}
          </Text>
          <ProgressBar percent={progressPercent} />
        </View>
        <View style={styles.container}>
          {/* Illustration Image */}
          {source && (
            <Image
              source={source}
              style={{
                width: windowWidth - spacing.xxxl,
                aspectRatio: 16 / 9,
                borderRadius: borderRadius[2],
                borderColor: colors.border.default.secondary,
                borderWidth: borderWidth.sm,
                marginTop: spacing.m,
              }}
              contentFit="cover"
            />
          )}
          {/* Step Title, Description, and Adhkar Entries */}
          <StepTitle items={items} />
          <StepDescription items={items} />
          <AdhkarCard items={items} />
          {/* Navigation Buttons */}
          <View style={styles.btn}>
            <Pressable onPress={handlePrevious} disabled={GuideIndex === 0}>
              <Text style={[styles.navText, GuideIndex === 0 && styles.disabled]}>Previous</Text>
            </Pressable>

            <Pressable onPress={handleNext} disabled={GuideIndex === totalSteps - 1}>
              <Text style={[styles.navText, GuideIndex === totalSteps - 1 && styles.disabled]}>
                Next
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16, // no defined gap in the UI design
    alignContent: "flex-end",
    justifyContent: "flex-start",
  },
  navText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.context.brand.secondary,
    fontWeight: "600",
  },
  disabled: {
    color: colors.context.brand.inverted,
  },

  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  header: {
    width: "90%",
    alignSelf: "center",
  },
  stepText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
});
