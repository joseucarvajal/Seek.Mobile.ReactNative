import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Colors, Layout, Images, isIOS, Icons } from "../../../constants";
import { Background, Block, Button, Text, Icon } from '../../../shared';

export interface ISignUpPhoneProps {
  
}

const SignUpReady: React.FC<ISignUpPhoneProps> = ({ }) => {
  const navigation = useNavigation();
  return (
    <Background image={Images.Background_3}>
      <Block flex safe center middle space='evenly'>
        <Block center middle>
          <Block shadow>
            <Icon family={isIOS ? 'seekQ' : 'FontAwesome'} name={Icons.check} size={56} color={Colors.white} />
          </Block>
          <Block center middle padding={Layout.base}>
            <Text h5 book center>You're verified</Text>
          </Block>
          <Block center middle padding={Layout.base}>
            <Text h1 book center color={Colors.white}>Ready to Connect?</Text>
          </Block>
          <Block center middle wrap>
            <Text h5 book center>We need a little more information from you to help you start connecting with others.</Text>
          </Block>
        </Block>
        <Button type='large' shadow onPress={() => navigation.navigate('Profile')}>
          <Text h2 bold color={Colors.primary}>GET STARTED</Text>
        </Button>
      </Block>
    </Background>
  );
}

export default SignUpReady;