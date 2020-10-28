import React from "react";
import { Colors, Layout } from "../../../constants";
import { Button, Text, Block, Select } from '../../../shared';

export interface IProfileProps { }

const EnterLocationInfo: React.FC<IProfileProps> = ({ }) => {
  return (
    <Block flex space='between' style={{ padding: Layout.base, backgroundColor: Colors.white }}>
      <Block flex>
      <Block center middle>
        <Select
          defaultValue={'f'}
          items={[
            { label: 'City', value: '0' },
            { label: 'Medellin', value: 'mde' },
          ]}
          shadow
        />
        <Select
          defaultValue={'f'}
          items={[
            { label: 'State', value: '0' },
            { label: 'Antioquia', value: '4' },
          ]}
          shadow
        />
      </Block>
        <Block row bottom>
          <Button type='gradient' shadow onPress={() => console.log('Enter Location Info')}>
            <Text h2 bold color={Colors.white}>CONTINUE</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default EnterLocationInfo;