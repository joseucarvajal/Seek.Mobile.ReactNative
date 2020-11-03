import React from "react";
import { ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Icons, Layout } from "../../../constants";
import { Text, Block, Card, Swiper, ButtonPrimary, Icon, Chip } from '../../../shared';

export interface IMyProfileProps { }

const MyProfile: React.FC<IMyProfileProps> = ({ }) => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const chipsList = (interests: any, color: any) =>
    <Block>
      <Block row center wrap>
        {interests.map((item: any, index: number) => (
          <Chip
            key={item.id}
            value={item.text}
            activeColor={color.active}
            inactiveColor={color.inactive}
            textColor
          />
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
          <ButtonPrimary onPress={() => navigation.navigate('EditProfile')}>
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
          <Block paddingVertical={Layout.base}>
            <Text h2 bold>Public Interest</Text>
          </Block>
          {chipsList(publicInterests, Colors.chipPrimary)}
        </Block>
        <Block flex>
          <Block paddingVertical={Layout.base}>
            <Text h2 bold>Matching Level Interest</Text>
          </Block>
          {chipsList(matchingLevelInterests, Colors.chipSecondary)}
        </Block>
        <Block flex>
          <Block paddingVertical={Layout.base}>
            <Text h2 bold>Languages Known</Text>
          </Block>
          {chipsList(lenguagesKnown, Colors.chipSecondary)}
        </Block>
        <Block flex>
          <Block paddingVertical={Layout.base}>
            <Text h2 bold>About</Text>
          </Block>
          <Text h2 light>Hi, everybody! I am vehicula erat vitae ojia ultrices ullamcorper. Nulla a leo nec tellus volutpat vestibulum a eu ligula. Aenean mollis purus a viverra scelerisque.</Text>
        </Block>
        <Block flex>
          <Block paddingVertical={Layout.base}>
            <Text h2 bold>Inner Thoughts</Text>
          </Block>
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
          {images.map((item) =>
            <Card
              key={item.id}
              source={{ uri: item.image }}
              icon={Icons.edit}
              iconColor={Colors.quaternary}
              iconSize={28}
              borderless
              horizontal
              shadowIcon
            />
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
  {
    id: 1,
    image: 'https://loremflickr.com/375/466/dog'
  },
  {
    id: 2,
    image: 'https://loremflickr.com/375/466/paris'
  },
  {
    id: 3,
    image: 'https://loremflickr.com/375/466/rio'
  },
  {
    id: 4,
    image: 'https://loremflickr.com/375/466/girl'
  },
  {
    id: 5,
    image: 'https://loremflickr.com/375/466/brazil'
  },
  {
    id: 6,
    image: 'https://loremflickr.com/375/466/all'
  }
]

const publicInterests = [
  {
    id: 1,
    text: 'Cat lover',
  },
  {
    id: 2,
    text: 'Art',
  },
  {
    id: 3,
    text: 'Beach lover',
  },
  {
    id: 4,
    text: 'Horses',
  },
  {
    id: 5,
    text: 'Beauty',
  },
  {
    id: 6,
    text: 'Coffer',
  },
  {
    id: 7,
    text: 'Cat lover',
  },
  {
    id: 8,
    text: 'Art',
  },
  {
    id: 9,
    text: 'Beach lover',
  },
  {
    id: 10,
    text: 'Horses',
  },
  {
    id: 11,
    text: 'Beauty',
  },
  {
    id: 12,
    text: 'Coffer',
  }
]

const matchingLevelInterests = [
  {
    id: 1,
    text: 'Cat lover',
  },
  {
    id: 2,
    text: 'Art',
  },
  {
    id: 3,
    text: 'Beach lover',
  },
  {
    id: 4,
    text: 'Horses',
  },
  {
    id: 5,
    text: 'Beauty',
  },
  {
    id: 6,
    text: 'Coffer',
  },
  {
    id: 7,
    text: 'Cat lover',
  },
  {
    id: 8,
    text: 'Art',
  },
  {
    id: 9,
    text: 'Beach lover',
  },
  {
    id: 10,
    text: 'Horses',
  },
  {
    id: 11,
    text: 'Beauty',
  },
  {
    id: 12,
    text: 'Coffer',
  }
]

const lenguagesKnown = [
  {
    id: 1,
    text: 'English',
  },
  {
    id: 2,
    text: 'Spanish',
  }
]