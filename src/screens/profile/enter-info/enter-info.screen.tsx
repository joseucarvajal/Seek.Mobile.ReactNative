import React from "react";
import { Colors } from "../../../constants";
import { Text, Block, Input, ToggleButton } from '../../../shared';

export interface IProfileProps {

}

const EnterInfo: React.FC<IProfileProps> = ({ 

}) => {
  return (
    <>
      <Block flex>
        <Input
          left
          color='primary'
          borderless
          placeholder='Nickname'
          icon="user"
          iconColor={Colors.primary}
          iconSize={24}
          textInputStyle={{ color: Colors.primary, fontWeight: '500', fontSize: 22 }}
        />
        <Input
          color='quaternary'
          borderless
          placeholder='First Name'
          placeholderTextColor={Colors.quaternary}
          textInputStyle={{ color: Colors.black, fontWeight: '500', fontSize: 24 }}
        >
          <Block row center middle>
            <Text h4 color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => {}}/>
          </Block>
        </Input>
        <Input
          color='quaternary'
          borderless
          placeholder='Last Name'
          placeholderTextColor={Colors.quaternary}
        >
          <Block row center middle>
            <Text h4 color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => {}}/>
          </Block>
        </Input>
        <Input
          color='quaternary'
          borderless
          placeholder='Password'
          placeholderTextColor={Colors.quaternary}
          password
          viewPass
        />
        <Input
          color='quaternary'
          borderless
          placeholder='Confirm Password'
          placeholderTextColor={Colors.quaternary}
          password
          viewPass
        />
      </Block>
    </>
  );
}

export default EnterInfo;