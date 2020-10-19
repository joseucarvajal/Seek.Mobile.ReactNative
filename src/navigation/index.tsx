import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Profile from '../screens/profile/profile/profile.screen';
import Components from '../screens/components/components.screen';
import Home from '../screens/home/home-screen';

import  {
  SignUp,
  SignUpEmail,
  SignUpPhone,
  SignUpVerificationCode,
  SignUpReady
} from '../screens/signup';


import Settings from '../screens/settings/settings/settings.screen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>      
      <Stack.Screen name="Home" component={Home} />  


      {/*Profile screens*/}
      <Stack.Screen name="Profile" component={Components} />

      {/*Signup screens*/}
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
      <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
      <Stack.Screen name="SignUpVerificationCode" component={SignUpVerificationCode} />
      <Stack.Screen name="SignUpReady" component={SignUpReady} />

      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
