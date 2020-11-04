import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Layout, Colors } from "../../../constants";
import { Text, Block } from '../../../shared';
import { Chip } from "../../../shared";
import { ScrollView } from "react-native-gesture-handler";

export interface ISetIntetestProps {

}

const SetIntetest: React.FC<ISetIntetestProps> = ({

}) => {

  const chipsList = interests.map((item: any) => (
    <Block key={item.id}>
      <Chip
        key={item.id}
        value={item.text}
        activeColor={Colors.chipPrimary.active}
        inactiveColor={Colors.chipPrimary.inactive}
        textColor
      />
    </Block>
  ));

  return (
    <Block flex>
      <Block left style={{ paddingTop: Layout.base * 2 }}>
        <Text h2 bold>Set Your Public interests</Text>
      </Block>
      <Block style={{ paddingTop: Layout.base, paddingBottom: Layout.base }}>
        <Text h3 numberOfLines={2} style={{ width: Layout.window.width - Layout.base }}>
          Please pick at least 3 public interests to get started.
        </Text>
      </Block>
      <Block flex style={{ marginRight: Layout.base * 2 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block row center wrap paddingBottom={Layout.base * 2}>
            {chipsList}
          </Block>
        </ScrollView>
        <LinearGradient
          colors={[Colors.transparent, Colors.white]}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, }}
        />
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
    text: 'Cycling lover',
  },
  {
    id: '9',
    text: 'Craft beer',
  },
  {
    id: '10',
    text: 'Cat lover',
  },
  {
    id: '11',
    text: 'Art',
  },
  {
    id: '12',
    text: 'Beach lover',
  },
  {
    id: '13',
    text: 'Horses',
  },
  {
    id: '14',
    text: 'Beauty',
  },
  {
    id: '15',
    text: 'Coffer',
  },
  {
    id: '16',
    text: 'Politics',
  },
  {
    id: '17',
    text: 'Cycling',
  },
  {
    id: '18',
    text: 'Craft beer',
  },
  {
    id: '19',
    text: 'Cat lover',
  },
  {
    id: '20',
    text: 'Art',
  },
  {
    id: '21',
    text: 'Beach lover',
  },
  {
    id: '22',
    text: 'Horses',
  },
  {
    id: '23',
    text: 'Beauty',
  },
  {
    id: '24',
    text: 'Coffer',
  },
  {
    id: '25',
    text: 'Politics',
  },
  {
    id: '26',
    text: 'Cycling',
  },
  {
    id: '27',
    text: 'Craft beer',
  },
  {
    id: '28',
    text: 'Cat lover',
  },
  {
    id: '29',
    text: 'Art',
  },
  {
    id: '30',
    text: 'Beach lover',
  },
  {
    id: '31',
    text: 'Horses',
  },
  {
    id: '32',
    text: 'Beauty',
  },
  {
    id: '33',
    text: 'Coffer',
  },
  {
    id: '34',
    text: 'Politics',
  },
  {
    id: '35',
    text: 'Cycling',
  },
  {
    id: '36',
    text: 'Craft beer',
  },
  {
    id: '37',
    text: 'Cat lover',
  },
  {
    id: '38',
    text: 'Art',
  },
  {
    id: '39',
    text: 'Beach lover',
  },
  {
    id: '40',
    text: 'Horses',
  },
  {
    id: '41',
    text: 'Beauty',
  },
  {
    id: '42',
    text: 'Coffer',
  },
  {
    id: '43',
    text: 'Politics',
  },
  {
    id: '44',
    text: 'Cycling',
  },
  {
    id: '45',
    text: 'Craft beer',
  }
]