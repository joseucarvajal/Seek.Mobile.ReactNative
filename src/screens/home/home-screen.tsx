import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { RootStackParamList } from "../../types";
import { Block, Tabs, Text, Image, Background, Card } from "../../shared";
import { Layout, Colors, Images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export interface IHomeProps {
  navigation: ProfileScreenNavigationProp;
}

const Home: React.FC<IHomeProps> = ({ }) => {

  const characters = db

  const _renderItem = (object: any) => {
    return (
      <Block height={'60%'}>
        <Card
          source={{ uri: object.item.image }}
          item={object.item}
          home
          horizontal
          shadow
          style={{ borderRadius: 20, overflow: 'hidden' }}
        />
      </Block>
    )
  }

  return (
    <LinearGradient
      colors={['#7FE0EE', '#00C1DE']}
      start={{ x: 1.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={{ height: Layout.window.height }}
    >
      <Block safe flex center>
        <Block paddingLeft={Layout.base * 3}>
          <Tabs
            initialIndex={'here'}
            data={defaultMenu}
            backgroundless
            gradient
            showSeparator
            customTextColor={Colors.white}
          />
        </Block>
        <Block center backgroundColor={Colors.transparent} paddingTop={Layout.base * 2} shadow>
          <Carousel
            data={characters}
            renderItem={_renderItem}
            layout='tinder'
            layoutCardOffset={9}
            sliderWidth={Layout.window.width}
            itemWidth={Layout.window.width - Layout.base * 2}
          />
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default Home;

const defaultMenu = [
  { id: 'here', title: 'HERE AND NOW', },
  { id: 'out', title: 'OUT THERE', },
  { id: 'hapen', title: 'HAPENNING', }
];

const db = [
  {
    name: 'Richard',
    age: '26',
    location: 'Beacon Hill',
    miles: 5,
    image: 'https://loremflickr.com/351/464/man'
  },
  {
    name: 'Bachman',
    age: '27',
    location: 'Miami',
    miles: 5,
    image: 'https://loremflickr.com/351/464/girl'
  },
  {
    name: 'Monica',
    age: '28',
    location: 'New York',
    miles: 5,
    image: 'https://loremflickr.com/351/464/man'
  },
  {
    name: 'Jared',
    age: '29',
    location: 'California',
    miles: 5,
    image: 'https://loremflickr.com/351/464/girl'
  },
  {
    name: 'Dinesh',
    age: '30',
    location: 'New York',
    miles: 5,
    image: 'https://loremflickr.com/351/464/man'
  }
]