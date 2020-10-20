import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsItems from "../../../constants/Settings";
import { MenuItem } from "../../../shared";
import styles from './settings.style';

export interface ISettingsProps { }

const Settings: React.FC<ISettingsProps> = ({ }) => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <View style={styles.body}>
          <MenuItem items={SettingsItems} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
