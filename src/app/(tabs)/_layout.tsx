import { Tabs } from "expo-router";

function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animation: "none",
        tabBarActiveTintColor: "#A46A3D",
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
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
