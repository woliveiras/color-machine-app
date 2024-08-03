import { SettingsProvider } from "@/context/settings";
import { Tabs } from "expo-router";

import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <SettingsProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => (
              <View>
                <Text>🏠</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: () => (
              <View>
                <Text>⚙️</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </SettingsProvider>
  );
}
