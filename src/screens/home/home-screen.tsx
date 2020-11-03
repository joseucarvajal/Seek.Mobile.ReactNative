import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../types";
import { Block } from "../../shared";
import { Layout } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export interface IHomeProps {
  navigation: ProfileScreenNavigationProp;
}

const Home: React.FC<IHomeProps> = ({ }) => {
  return (

    <LinearGradient
      colors={['#7FE0EE', '#00C1DE']}
      start={{ x: 1.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={{ height: Layout.window.height }}
    >
      <Block safe flex>
        
      </Block>
    </LinearGradient>
  );
};

export default Home;
