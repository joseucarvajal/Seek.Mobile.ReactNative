import React from "react";

import { Text, ScrollView, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsItems from "../../../constants/Settings";
import { MenuItem } from "../../../shared";
import styles from './settings.screen.styles';

export type SettingItem = {
  text: undefined;
  icon: undefined;
};

export interface ISettingsProps {}

const Settings: React.FC<ISettingsProps> = ({}) => {

  const renderItem = ({ item: any }) => {
    switch(item.type) {
      case 'switch': 
        return (
          <MenuItem {...item} />
        );
      case 'button': {
        return (
          <MenuItem {...item} />
        );
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={SettingsItems}
          keyExtractor={(item: any, index: any) => `${item.text}`}
          renderItem={renderItem}
          ListHeaderComponent={
            <View style={styles.container}>
              <Text style={styles.title}>
                Settings
              </Text>
            </View>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
