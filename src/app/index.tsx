import { Redirect } from "expo-router";

export default function Index() {
  const hasOnboarded = false; // To be replaced with a store.

  if (!hasOnboarded) return <Redirect href="/onboarding" />;
  return <Redirect href="/(tabs)/home" />;
}
