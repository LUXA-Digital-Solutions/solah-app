import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Home, BookOpenText, Bolt } from "lucide-react-native";

export function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#A46A3D",
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="adhkar"
        options={{
          title: "Adhkar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hands-pray" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: "Guide",
          tabBarIcon: ({ color, size }) => <BookOpenText color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Bolt color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
