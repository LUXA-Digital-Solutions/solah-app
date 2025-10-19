import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";

import { OnboardingContent } from "@/features/onboarding/components/OnboardingContent";
import { onboardingData } from "@/features/onboarding/data/onboardingData";
import { useOnboardingPersistence } from "@/features/onboarding/hooks/useOnboardingPersistence";
import { AppButton, ProgressBar } from "@/shared/components";

import { styles } from "./OnboardingScreen.styles";

export function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width: windowWidth } = useWindowDimensions();
  const router = useRouter();
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
    router.replace("/");
  };

  const renderItem = ({ item }: { item: (typeof onboardingData)[0] }) => (
    <View style={{ width: windowWidth }}>
      <OnboardingContent
        imgsrc={item.imgsrc}
        title={item.title}
        description={item.description}
        imgPos={item.imgPos}
      />
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

        <AppButton
          title="Skip"
          variant="outline"
          onPress={completeOnboarding}
          style={styles.skipButton}
          disabled={currentIndex === onboardingData.length - 1}
        />
      </View>
    </View>
  );
}
