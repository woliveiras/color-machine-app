import { createContext, ReactNode, useContext, useState } from "react";

type Styles = {
  title: number;
  text: number;
  background: string;
  titleColor: string;
  textColor: string;
  backgroundColor: string;
};

type Settings = {
  settings: Styles;
  setSettings: ({}: Styles) => void;
};

const SettingsContext = createContext<Settings>({
  settings: {
    title: 0,
    text: 0,
    background: "",
    titleColor: "",
    textColor: "",
    backgroundColor: "",
  },
  setSettings: () => {},
});

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState({
    title: 20,
    text: 18,
    background: "#fff",
    titleColor: "#000",
    textColor: "#000",
    backgroundColor: "pink",
  });

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
