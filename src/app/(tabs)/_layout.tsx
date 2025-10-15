import { Tabs } from "expo-router";

function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="adhkar" />
      <Tabs.Screen name="guide" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}

export default Layout;
