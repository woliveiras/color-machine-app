import { View, Text, Pressable } from "react-native";
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from "reanimated-color-picker";

import { useSettings } from "@/context/settings";

import { styles } from "./styles";

export default function TabTwoScreen() {
  const { settings, setSettings } = useSettings();

  const updateTitleColor = ({ hex }: any) => {
    setSettings({
      ...settings,
      titleColor: hex,
    });
  };

  const updateTextColor = ({ hex }: any) => {
    setSettings({
      ...settings,
      textColor: hex,
    });
  };

  const updateBGColor = ({ hex }: any) => {
    setSettings({
      ...settings,
      backgroundColor: hex,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Title size:</Text>
        <View style={styles.buttonsWrapper}>
          <Pressable
            style={styles.button}
            onPress={() =>
              setSettings({
                ...settings,
                title: settings.title - 2,
              })
            }
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() =>
              setSettings({
                ...settings,
                title: settings.title + 2,
              })
            }
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>{settings.title}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Text size:</Text>
        <View style={styles.buttonsWrapper}>
          <Pressable
            style={styles.button}
            onPress={() =>
              setSettings({
                ...settings,
                text: settings.text - 2,
              })
            }
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() =>
              setSettings({
                ...settings,
                text: settings.text + 2,
              })
            }
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>{settings.text}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Title color:</Text>
        <ColorPicker
          style={{ width: "40%" }}
          value="purple"
          onComplete={updateTitleColor}
        >
          <HueSlider />
        </ColorPicker>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Title color:</Text>
        <ColorPicker
          style={{ width: "40%" }}
          value="purple"
          onComplete={updateTextColor}
        >
          <HueSlider />
        </ColorPicker>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Background color:</Text>
        <ColorPicker
          style={{ width: "40%" }}
          value="purple"
          onComplete={updateBGColor}
        >
          <HueSlider />
        </ColorPicker>
      </View>
    </View>
  );
}
