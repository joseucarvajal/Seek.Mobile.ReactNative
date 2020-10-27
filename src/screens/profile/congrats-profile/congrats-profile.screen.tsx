import React from 'react';
import { Colors, Layout, Images, isIOS, Icons } from "../../../constants";
import { Background, Block, Button, Text, Icon } from '../../../shared';

export interface ICongratsProps {

}

const Congrats: React.FC<ICongratsProps> = ({ }) => {
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
        <Button type='large' shadow>
          <Text h2 bold color={Colors.primary}>CONTINUE SEARCHING</Text>
        </Button>
      </Block>
    </Background>
  );
}

export default Congrats;