import { useContext } from "react";
import { View, Text } from "react-native";

import { useSettings } from "@/context/settings";

import { styles } from "./styles";

export default function HomeScreen() {
  const { settings } = useSettings();

  return (
    <View
      style={[styles.container, { backgroundColor: settings.backgroundColor }]}
    >
      <Text
        style={[
          styles.title,
          {
            fontSize: settings.title,
            color: settings.titleColor,
          },
        ]}
      >
        Settings Machine
      </Text>
      <Text
        style={[
          styles.text,
          {
            fontSize: settings.text,
            color: settings.textColor,
          },
        ]}
      >
        You can play with the styles by going to the settings screen ⚙️
      </Text>
    </View>
  );
}
