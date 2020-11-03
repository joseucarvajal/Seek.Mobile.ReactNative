import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Layout, Images, Colors } from "../../constants";
import { Background, Block, Text, Image } from '../../shared';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../types';

export interface IOnboardingProps { }

export default function Onboarding({
  navigation,
}: StackScreenProps<RootStackParamList, 'Onboarding'>) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.replace('SignUp')}>
      <Background image={Images.Background_1}>
        <Block absolute style={{ bottom: 0, alignSelf: 'center', margin: Layout.base * 4 }}>
          <Block center>
            <Image source={Images.LogoAnimated} width={252} height={64} />
          </Block>
          <Block paddingTop={Layout.base}>
            <Text h3 book color={Colors.white} center>Whatever you're seeking is right in front of you...</Text>
          </Block>
        </Block>
      </Background>
    </TouchableWithoutFeedback>
  );
}