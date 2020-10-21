import * as React from "react";
import { ColorSchemeName } from "react-native";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../types";

import { Layout, Colors } from "../constants";
import { Icon, Header } from "../shared";

import NotFoundScreen from "../screens/NotFoundScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import Profile from "../screens/profile/profile/profile.screen";
import Components from "../screens/components/components.screen";
import Home from "../screens/home/home-screen";

import {
  SignUp,
  SignUpEmail,
  SignUpPhone,
  SignUpVerificationCode,
  SignUpReady,
} from "../screens/signup";

import {
  Settings,
  HelpFaq,
  HelpMenu,
  Legal,
  TutorialVideo,
  Modes,
  Notifications,
} from "../screens/settings";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : MyTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const activeTab = Colors.primary;
const inactiveTab = Colors.muted;

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: activeTab,
        inactiveTintColor: inactiveTab,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"home"}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"chat"}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Profile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"contacts"}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"settings"}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen name="Home" component={HomeTabs} />

      {/*Profile screens*/}
      <Stack.Screen
        name="Profile"
        component={Components}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Components"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />

      {/*Signup screens*/}
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpEmail"
        component={SignUpEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpPhone"
        component={SignUpPhone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpVerificationCode"
        component={SignUpVerificationCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpReady"
        component={SignUpReady}
        options={{ headerShown: false }}
      />

      {/*Settings screens*/}
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Settings"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <Stack.Screen
        name="HelpFaq"
        component={HelpFaq}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="FAQ"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <Stack.Screen
        name="HelpMenu"
        component={HelpMenu}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Help"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <Stack.Screen
        name="Legal"
        component={Legal}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Legal"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <Stack.Screen
        name="TutorialVideo"
        component={TutorialVideo}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Tutorial Video"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <Stack.Screen
        name="Modes"
        component={Modes}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Modes"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Notifications"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
