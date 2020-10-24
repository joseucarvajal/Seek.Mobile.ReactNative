import React from "react";
import { Colors, Images, Layout } from "../../../constants";
import { Text, Block, Button } from '../../../shared';
import Chip from "../../../shared/components/chips/chip.comp";

export interface ISetIntetestProps {

}

const SetIntetest: React.FC<ISetIntetestProps> = ({

}) => {

  const chipsList = interests.map((item: any, index: any) => (
    <Block key={item.id}>
      <Chip
        key={item.id}
        value={item.text}
      />
    </Block>
  ));

  return (
    <Block flex>
      <Block left style={{ paddingTop: Layout.base * 2 }}>
        <Text h2 bold>Set Your Public interests</Text>
      </Block>
      <Block left style={{ paddingTop: Layout.base, paddingBottom: Layout.base }}>
        <Text h3>Please pick at least 3 public interests to get started</Text>
      </Block>
      <Block row center wrap>
        {chipsList}
      </Block>
    </Block>
  );
}

export default SetIntetest;

const interests = [
  {
    id: '1',
    text: 'Cat lover',
  },
  {
    id: '2',
    text: 'Art',
  },
  {
    id: '3',
    text: 'Beach lover',
  },
  {
    id: '4',
    text: 'Horses',
  },
  {
    id: '5',
    text: 'Beauty',
  },
  {
    id: '6',
    text: 'Coffer',
  },
  {
    id: '7',
    text: 'Politics',
  },
  {
    id: '8',
    text: 'Cycling',
  },
  {
    id: '9',
    text: 'Craft beer',
  }
]