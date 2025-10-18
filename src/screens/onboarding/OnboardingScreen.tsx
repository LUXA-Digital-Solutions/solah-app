import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef, useState } from "react";
import { FlatList, useWindowDimensions, View, Text, Image } from "react-native";

import { AppButton, ProgressBar } from "@/shared/components";

import { styles } from "./OnboardingScreen.styles";

const onboardingData = [
  {
    id: 1,
    title: "Step-by-step Prayer Guide",
    description: "Learn how to perform prayers correctly with detailed step-by-step guidance.",
    image: require("@/assets/images/onboarding-screen-illustrations/Prayer Illustration.png"),
    layout: "imageFirst",
  },
  {
    id: 2,
    title: "Daily and Monthly Prayer-timetable",
    description: "Never miss a prayer with accurate daily and monthly prayer schedules.",
    image: require("@/assets/images/onboarding-screen-illustrations/Calender Illustration.png"),
    layout: "titleFirst",
  },
  {
    id: 3,
    title: "Qibla Finder based on user's location",
    description: "Find the correct prayer direction (Qibla) from anywhere in the world.",
    image: require("@/assets/images/onboarding-screen-illustrations/Compass Illustration.png"),
    layout: "imageFirst",
  },
];

const useOnboardingPersistence = () => {
  const markOnboardingCompleted = async () => {
    try {
      await AsyncStorage.setItem("hasCompletedOnboarding", "true");
    } catch {
      // Error handling kept silent for production
    }
  };

  const checkOnboardingCompleted = async () => {
    try {
      const value = await AsyncStorage.getItem("hasCompletedOnboarding");
      return value !== null;
    } catch {
      return false;
    }
  };

  return { markOnboardingCompleted, checkOnboardingCompleted };
};

const useTabNavigation = () => {
  const navigateToMainTabs = () => {
    // TODO: Replace with actual tab navigation
  };

  return { navigateToMainTabs };
};

export function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width: windowWidth } = useWindowDimensions();
  const { navigateToMainTabs } = useTabNavigation();
  const { markOnboardingCompleted } = useOnboardingPersistence();

  const progressPercent = (currentIndex / (onboardingData.length - 1)) * 100;

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    } else {
      completeOnboarding();
    }
  };

  const completeOnboarding = async () => {
    await markOnboardingCompleted();
    navigateToMainTabs();
  };

  const skipOnboarding = async () => {
    await markOnboardingCompleted();
    navigateToMainTabs();
  };

  const renderItem = ({ item }: { item: (typeof onboardingData)[0] }) => (
    <View style={[styles.screenContainer, { width: windowWidth }]}>
      {item.layout === "imageFirst" && (
        <>
          <Image source={item.image} style={styles.illustration} resizeMode="contain" />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </>
      )}

      {item.layout === "titleFirst" && (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.illustration} resizeMode="contain" />
          <Text style={styles.description}>{item.description}</Text>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
          setCurrentIndex(newIndex);
        }}
      />

      <View style={styles.progressBarContainer}>
        <ProgressBar percent={progressPercent} />
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title={currentIndex === onboardingData.length - 1 ? "Get Started" : "Continue"}
          variant="filled"
          onPress={goToNext}
          style={styles.continueButton}
        />

        {currentIndex < onboardingData.length - 1 && (
          <AppButton
            title="Skip"
            variant="outline"
            onPress={skipOnboarding}
            style={styles.skipButton}
          />
        )}
      </View>
    </View>
  );
}
