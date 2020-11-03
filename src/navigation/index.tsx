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

import { Colors, Icons, isIOS } from "../constants";
import { Icon, Header } from "../shared";

import NotFoundScreen from "../screens/NotFoundScreen";
import LinkingConfiguration from "./LinkingConfiguration";

import Components from "../screens/components/components.screen";
import Home from "../screens/home/home-screen";
import Onboarding from "../screens/onboarding/onboarding.screen";

import { 
  Profile,
  MyProfile,
  EditMyProfile,
  EditBasicInfo,
  Congrats
} from "../screens/profile"

import {
  SignUp,
  SignUpEmail,
  SignUpPhone,
  SignUpVerificationCode,
  SignUpCreatePassword,
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
const MainStack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const activeTab = Colors.primary;
const inactiveTab = Colors.muted;

function OnBoarding() {
  return (
    <MainStack.Navigator mode="card" headerMode="none">
      <MainStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SignUpEmail"
        component={SignUpEmail}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SignUpPhone"
        component={SignUpPhone}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SignUpVerificationCode"
        component={SignUpVerificationCode}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SignUpCreatePassword"
        component={SignUpCreatePassword}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SignUpReady"
        component={SignUpReady}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Legal" component={LegalStack} />
    </MainStack.Navigator>
  )
}

function HomeStack() {
  return (
    <MainStack.Navigator mode="card" headerMode="screen">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}

function ChatStack() {
  return (
    <MainStack.Navigator mode="card" headerMode="screen">
      <MainStack.Screen
        name="Home"
        component={NotFoundScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Chat"
              navigation={navigation}
              scene={scene}
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
    </MainStack.Navigator>
  )
}

function ContactsStack() {
  return (
    <MainStack.Navigator mode="card" headerMode="screen">
      <MainStack.Screen
        name="Home"
        component={NotFoundScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Contacts"
              navigation={navigation}
              scene={scene}
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
    </MainStack.Navigator>
  )
}

function SettingsStack() {
  return (
    <MainStack.Navigator mode="card" headerMode="screen">
      {/*Settings screens*/}
      <MainStack.Screen
        name="Settings"
        component={Settings}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Settings"
              navigation={navigation}
              scene={scene}
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <MainStack.Screen
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
      <MainStack.Screen
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
      <MainStack.Screen
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
      <MainStack.Screen
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
      <MainStack.Screen
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
      <MainStack.Screen
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
      <MainStack.Screen
        name="Profile"
        component={MyProfile}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="EditProfile"
        component={EditMyProfile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Edit Profile"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <MainStack.Screen
        name="EditBasicInfo"
        component={EditBasicInfo}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Edit Basic Info"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
    </MainStack.Navigator>
  )
}

function LegalStack() {
  return (
    <MainStack.Navigator mode="card" headerMode="screen">
      <MainStack.Screen
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
    </MainStack.Navigator>
  )
}

function RootTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: activeTab,
        inactiveTintColor: inactiveTab,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              family={isIOS ? "seekQ" : "FontAwesome"}
              name={Icons.home}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              family={isIOS ? "seekQ" : "FontAwesome"}
              name={Icons.chat}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              family={isIOS ? "seekQ" : "FontAwesome"}
              name={Icons.contacts}
              size={18}
              style={{ marginRight: 30 }}
              color={focused ? activeTab : inactiveTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              family={isIOS ? "seekQ" : "FontAwesome"}
              name={Icons.settings}
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
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="SignUp" component={OnBoarding} />
      <RootStack.Screen name='Profile' component={MainNavigator} />
      <RootStack.Screen name="Home" component={RootTabs} />
    </RootStack.Navigator>
  )
}

function MainNavigator() {
  return (
    <MainStack.Navigator mode="card" headerMode="screen">
      {/*Profile screens*/}
      <MainStack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Enter Info"
              navigation={navigation}
              scene={scene}
              back
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header },
        }}
      />
      <MainStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </MainStack.Navigator>
  );
}
