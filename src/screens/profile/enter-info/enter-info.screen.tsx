import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Layout } from "../../../constants";
import { Text, Block, Input, ToggleButton, Calendar, Select } from '../../../shared';

export interface IProfileProps {

}

const EnterInfo: React.FC<IProfileProps> = ({

}) => {
  return (
    <ScrollView>
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
          style={{ marginVertical: Layout.base }}
        />
        <Input
          color='quaternary'
          borderless
          placeholder='First Name'
          placeholderTextColor={Colors.quaternary}
          textInputStyle={{ color: Colors.black, fontWeight: '500', fontSize: 24 }}
          style={{ marginVertical: Layout.base }}
        >
          <Block row center middle>
            <Text h4 color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => { }} />
          </Block>
        </Input>
        <Input
          color='quaternary'
          borderless
          placeholder='Last Name'
          placeholderTextColor={Colors.quaternary}
          style={{ marginVertical: Layout.base }}
        >
          <Block row center middle>
            <Text h4 color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => { }} />
          </Block>
        </Input>
        <Block flex style={{ paddingRight: Layout.base * 2 }}>
          <Block right style={{ paddingTop: Layout.base }}>
            <Block row center middle>
              <Text h4 color={Colors.placeholder}>Make Public  </Text>
              <ToggleButton color='primary' onValueChange={() => { }} />
            </Block>
          </Block>
          <Block style={{ paddingTop: Layout.base }}>
            <Calendar />
          </Block>
          <Block style={{ paddingTop: Layout.base * 2 }}>
            <Select
              defaultValue={'f'}
              items={[
                { label: 'Male', value: 'm' },
                { label: 'Female', value: 'f' },
              ]}
              shadow
            />
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}

export default EnterInfo;