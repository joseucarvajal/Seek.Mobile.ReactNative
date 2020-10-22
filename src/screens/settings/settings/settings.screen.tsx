import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsItems from "../../../constants/Settings";
import { Block, MenuItem } from "../../../shared";
import styles from './settings.style';

export interface ISettingsProps { }

const Settings: React.FC<ISettingsProps> = ({ }) => {
  return (
    <Block safe>
      <MenuItem items={SettingsItems} />
    </Block>
  );
};

export default Settings;
