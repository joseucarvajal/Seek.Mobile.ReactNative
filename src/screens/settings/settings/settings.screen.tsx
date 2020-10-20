import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Images } from '../../../constants';
import SettingsItems from "../../../constants/Settings";
import { MenuItem, Image } from "../../../shared";
import styles from './settings.style';

import Home from '../../home/home-screen';
import Profile from '../../profile/profile/profile.screen';

const Tab = createBottomTabNavigator();

export type TabParamList = {
  Home: undefined
  Chat: undefined
  Contacts: undefined
  Settings: undefined
}

export interface ISettingsProps {}

const Settings: React.FC<ISettingsProps> = ({}) => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <View style={styles.body}>
          <MenuItem items={SettingsItems} />
        </View>
        <View style={styles.footerView}>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: () => null,
                tabBarIcon: () => (
                  <Image width={26} source={Images.ContactsSvg} />
                ),
              }}
            />
            <Tab.Screen
              name="Chat"
              component={Home}
              options={{
                tabBarLabel: () => null,
                tabBarIcon: () => (
                  <Image width={26}  source={Images.ChatSvg} />
                ),
              }}
            />
            <Tab.Screen
              name="Contacts"
              component={Profile}
              options={{
                tabBarLabel: () => null,
                tabBarIcon: () => (
                  <Image width={26} source={Images.ContactsSvg} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Home}
              options={{
                tabBarLabel: () => null,
                tabBarIcon: () => (
                  <Image width={26} source={Images.SettingsSvg} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
