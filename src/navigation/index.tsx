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
import Settings from '../screens/settings/settings/settings.screen';

import  {
  SignUp,
  SignUpEmail,
  SignUpPhone,
  SignUpVerificationCode,
  SignUpReady
} from '../screens/signup';


import { Layout, Colors } from '../constants';
import Header from '../shared/components/header/header.comp';

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
    <Stack.Navigator mode="card" headerMode="screen">      
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>  

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
              next
              bgColor={Colors.header}
            />
          ),
          cardStyle: { backgroundColor: Colors.header }
        }}
      />

      {/*Signup screens*/}
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUpPhone" component={SignUpPhone} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUpVerificationCode" component={SignUpVerificationCode} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUpReady" component={SignUpReady} options={{ headerShown: false }}/>

      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
