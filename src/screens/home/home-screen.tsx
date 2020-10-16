import React from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'  
>;

export interface IHomeProps {
    navigation: ProfileScreenNavigationProp;
}

const Home: React.FC<IHomeProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('SignUp')}
      >
        Signup
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Profile')}
      >
        Profile
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Settings')}
      >
        Settings
      </Button>
    </SafeAreaView>
  );
};

export default Home;
