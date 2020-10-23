import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../types";
import { Button, Text, Block } from "../../shared";
import { Colors } from "../../constants";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export interface IHomeProps {
  navigation: ProfileScreenNavigationProp;
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  return (
    <Block safe flex>
      <Button
        left
        type='social'
        shadow
        icon="apple"
        iconColor={Colors.quaternary}
        iconSize={18}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text h3 center>Continue with Apple</Text>
      </Button>
      <Text />
      <Button
        left
        type='social'
        shadow
        icon="facebook"
        iconColor={Colors.quaternary}
        iconSize={18}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text h3 center>Continue with Facebook</Text>
      </Button>
      <Text />
      <Button
        left
        type='social'
        shadow
        icon="google"
        iconColor={Colors.quaternary}
        iconSize={18}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text h3 center>Continue with Google</Text>
      </Button>
    </Block>
  );
};

export default Home;
