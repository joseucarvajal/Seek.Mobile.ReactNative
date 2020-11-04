import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Colors, Layout, Images, isIOS, Icons } from "../../../constants";
import { Background, Block, Button, Text, Icon } from '../../../shared';
import { RootStackParamList } from '../../../types';

export interface ICongratsProps {

}

export default function Congrats({
  navigation,
}: StackScreenProps<RootStackParamList, 'Congrats'>) {
  return (
    <Background image={Images.Background_2}>
      <Block flex center middle space='evenly'>
        <Block center middle>
          <Block shadow>
            <Icon family={isIOS ? 'seekQ' : 'FontAwesome'} name={Icons.check} size={56} color={Colors.white} />
          </Block>
          <Block style={{ padding: Layout.base * 2 }}>
            <Text extraLarge bold color={Colors.white}>Congrats!</Text>
          </Block>
          <Block center middle>
            <Text h4 bold>Your profile is ready to go</Text>
          </Block>
          <Block center middle style={{ padding: Layout.base }}>
            <Text h3 bold color={Colors.white}>We encourage you to cultivate it further for now.</Text>
          </Block>
        </Block>
        <Button type='large' shadow onPress={() => navigation.replace('Home')}>
          <Text h2 bold color={Colors.primary}>CONTINUE SEARCHING</Text>
        </Button>
      </Block>
    </Background>
  );
}