import AsyncStorage from "@react-native-async-storage/async-storage";

export const useOnboardingPersistence = () => {
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
