import React from "react";
import Switch from "../Switch/Switch";
import { useStore } from "../../../zustand/store";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";

export default function PageHeaderThemeSwitch() {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  console.log(theme);

  return (
    <Switch
      id='theme-switch'
      colorOne="#082e41"
      colorTwo="#f2c13a"
      isOn={theme === "dark"}
      status={theme === "dark" ? <FaMoon /> : <LuSunMoon />}
      handleToggle={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    />
  );
}
