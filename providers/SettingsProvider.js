import React from "react";
import withSettings from "../containers/withSettings";
import SettingsContext from "./SettingsContext";

const SettingsProvider = ({ data: { allSettings: settings }, children }) => {
  if (!settings) settings = {};
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export default withSettings(SettingsProvider);
