import React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from 'react-native-navbar';
import { Layout, Colors, HeaderHeight } from '../../../constants'
import Text from '../text/text.comp'
import Image from '../image/image.comp'
import Icon from '../icons/icon.comp'

export interface IHeaderProps {
  back?: any;
  home?: any;
  index?: any;
  title?: any;
  save?: any;
  next?: any;
  avatar?: any;
  navigation?: any;
  scene?: any;
  props?: any;
  titleStyle?: any;
  shadowless?: any;
  transparent?: any;
  bgColor?: any;
}

interface ISelectState {

}

const Header: React.FC<IHeaderProps> = ({
  back,
  home,
  index,
  title,
  save,
  next,
  avatar,
  navigation,
  scene,
  props,
  titleStyle,
  shadowless,
  transparent,
  bgColor
}) => {

  const renderLeft = () => {
    return (
      <>
        {back &&
          <View style={styles.left}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                family="FontAwesome"
                name="chevron-left"
                size={24}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        }
        {avatar &&
          <View style={styles.left}>
            <Image
              size="avatar"
              source={avatar}
            />
          </View>
        }
      </>
    );
  };

  const renderCenter = () => {
    return (
      <>
        {title &&
          <View style={[styles.center, !back && { width: '100%', paddingLeft: Layout.base }]}>
            <Text bold h1 color={Colors.primary}>{title}</Text>
          </View>
        }
      </>
    );
  };

  const renderRight = () => {
    return (
      <>
        {next &&
          <View style={styles.right}>
            <TouchableOpacity>
              <Icon
                family="FontAwesome"
                name="chevron-right"
                size={24}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        }
      </>
    );
  };

  const headerStyles = [
    !shadowless && styles.shadow,
    transparent && { backgroundColor: Colors.transparent }
  ];

  const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

  return (
    <SafeAreaView edges={['right', 'top', 'left']}>
      <View style={[headerStyles, navbarStyles]}>
        <NavigationBar
          rightButton={renderRight()}
          title={renderCenter()}
          leftButton={renderLeft()}
          tintColor={transparent ? Colors.transparent : bgColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  navbar: {
    justifyContent: "center",
    width: Layout.window.width,
    height: HeaderHeight * 1.5
  },
  right: {
    justifyContent: 'center',
    alignItems: "center",
    marginRight: Layout.base,
    height: HeaderHeight,
  },
  center: {
    bottom: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: Layout.window.width * .7,
  },
  left: {
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: Layout.base,
    paddingRight: Layout.base * 2,
    height: HeaderHeight,
    zIndex: 1,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  }
});