import React from "react";
import { ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Icons, Images, Layout } from "../../../constants";
import { Text, Block, Card, Swiper, Image, ButtonPrimary, Icon, Chip } from '../../../shared';

export interface IMyProfileProps {

}

const MyProfile: React.FC<IMyProfileProps> = ({

}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const chipsList = (interests: any, color: any) =>
    <Block>
      <Block row center wrap>
        {interests.map((item: any) => (
          <Block key={item.id}>
            <Chip
              key={item.id}
              value={item.text}
              activeColor={color.active}
              inactiveColor={color.inactive}
              textColor
            />
          </Block>
        ))}
      </Block>
      <LinearGradient
        colors={[Colors.transparent, Colors.white]}
        style={{ position: 'absolute', left: 0, right: 0, bottom: -5, height: 25, }}
      />
    </Block>


  const renderMyProfileContent = () => {
    return (
      <Block flex padding={Layout.base}>
        <Block flex center middle padding={Layout.base}>
          <ButtonPrimary onPress={() => console.log("EDIT PROFILE")}>
            EDIT PROFILE
          </ButtonPrimary>
        </Block>
        <Block flex row paddingTop={Layout.base}>
          <Text h1 bold>Katie Wagner</Text><Text h1 light> 26</Text>
        </Block>
        <Block flex row paddingTop={Layout.base}>
          <Block row center middle>
            <Icon family='FontAwesome' name='hand-rock-o' size={28} color={Colors.iconProfile} />
            <Text h3> 10</Text>
          </Block>
          <Block row center middle paddingLeft={Layout.base}>
            <Icon family='FontAwesome' name='handshake-o' size={28} color={Colors.iconProfile} />
            <Text h3> 3</Text>
          </Block>
          <Block row center middle paddingLeft={Layout.base}>
            <Icon family='FontAwesome' name='lock' size={28} color={Colors.iconProfile} />
          </Block>
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Text h2>New Jersey School</Text>
          <Text h2>Pop Singer</Text>
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Text h2 bold>Public Interest</Text>
          {chipsList(publicInterests, Colors.chipPrimary)}
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Text h2 bold>Matching Level Interest</Text>
          {chipsList(matchingLevelInterests, Colors.chipSecondary)}
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Text h2 bold>Languages Known</Text>
          {chipsList(lenguagesKnown, Colors.chipSecondary)}
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Text h2 bold>About</Text>
          <Text h2 light>Hi, everybody! I am vehicula erat vitae ojia ultrices ullamcorper. Nulla a leo nec tellus volutpat vestibulum a eu ligula. Aenean mollis purus a viverra scelerisque.</Text>
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Text h2 bold>Inner Thoughts</Text>
          <Text h2 light>Hi, everybody! I am vehicula erat vitae ojia ultrices ullamcorper. Nulla a leo nec tellus volutpat vestibulum a eu ligula. Aenean mollis purus a viverra scelerisque.</Text>
        </Block>
      </Block>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex>
        <Swiper
          index={currentPage}
          showPaginationTop
          onChangeIndex={(params: any) => setCurrentPage(params.index)}
          height={Layout.window.height * .6}
        >
          {images.map((image, index) =>
            <Block>
              <Card
                key={index}
                source={{ uri: image }}
                icon={Icons.edit}
                iconColor={Colors.quaternary}
                iconSize={28}
                borderless
                horizontal
                shadowIcon
              />
            </Block>
          )}
        </Swiper>
      </Block>
      <Block flex style={{ marginTop: -Layout.base * 2 }}>
        <Card
          color={Colors.transparent}
          borderless
          topLeftBorder
          cardContent={renderMyProfileContent()}
          style={{ backgroundColor: Colors.white }}
        />
      </Block>
    </ScrollView>
  );
}

export default MyProfile;

const images = [
  'https://loremflickr.com/375/466/dog',
  'https://loremflickr.com/375/466/paris',
  'https://loremflickr.com/375/466/rio',
  'https://loremflickr.com/375/466/girl',
  'https://loremflickr.com/375/466/brazil',
  'https://loremflickr.com/375/466/all'
]

const publicInterests = [
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
    text: 'Cat lover',
  },
  {
    id: '8',
    text: 'Art',
  },
  {
    id: '9',
    text: 'Beach lover',
  },
  {
    id: '10',
    text: 'Horses',
  },
  {
    id: '11',
    text: 'Beauty',
  },
  {
    id: '12',
    text: 'Coffer',
  }
]

const matchingLevelInterests = [
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
    text: 'Cat lover',
  },
  {
    id: '8',
    text: 'Art',
  },
  {
    id: '9',
    text: 'Beach lover',
  },
  {
    id: '10',
    text: 'Horses',
  },
  {
    id: '11',
    text: 'Beauty',
  },
  {
    id: '12',
    text: 'Coffer',
  }
]

const lenguagesKnown = [
  {
    id: '1',
    text: 'English',
  },
  {
    id: '2',
    text: 'Spanish',
  }
]