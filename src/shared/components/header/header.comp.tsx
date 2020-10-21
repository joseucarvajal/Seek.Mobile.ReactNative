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

class Header extends React.Component<IHeaderProps, ISelectState> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  renderNext = () => {
    return (
      <TouchableOpacity>
        <Icon
          family='seekQ'
          size={24}
          name={'caret_right'}
          color={Colors.primary}
        />
      </TouchableOpacity>
    )
  }

  renderTitle = () => {
    const { title } = this.props;
    return (
      <View style={styles.center}>
        <Text bold h1 color={Colors.primary}>{title}</Text>
      </View>
    )
  }

  renderBack = () => {
    const { navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          family='seekQ'
          size={24}
          name={'caret_left'}
          color={Colors.primary}
        />
      </TouchableOpacity>
    )
  }

  renderAvatar = () => {
    return (
      <Image
        size="avatar"
        source={this.props.avatar}
      />
    )
  }

  renderLeft = () => {
    const { back, avatar } = this.props
    return (
      <View style={styles.left}>
        {back && this.renderBack()}
        {avatar && this.renderAvatar()}
      </View>
    );
  }

  renderCenter = () => {
    const { title } = this.props
    return (
      <View>
        {title && this.renderTitle()}
      </View>
    );
  }

  renderRight = () => {
    const { next } = this.props
    return (
      <View style={styles.right}>
        {next && this.renderNext()}
      </View>
    );
  }

  render() {
    const { shadowless, transparent, bgColor } = this.props

    const headerStyles = [
      !shadowless && styles.shadow,
      transparent && { backgroundColor: Colors.transparent }
    ];

    const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

    return (
      <SafeAreaView edges={['right', 'top', 'left']}>
        <View style={[headerStyles, navbarStyles]}>
          <NavigationBar
            title={this.renderCenter()}
            rightButton={this.renderRight()}
            leftButton={this.renderLeft()}
            tintColor={transparent ? Colors.transparent : bgColor}
          />
        </View>
      </SafeAreaView>
    )
  }
}

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
    height: HeaderHeight * 2.5
  },
  right: {
    justifyContent: 'center',
    alignItems: "center",
    marginRight: Layout.base,
    height: HeaderHeight,
  },
  center: {
    top: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: Layout.window.width * .7,
    height: HeaderHeight
  },
  left: {
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: Layout.base,
    height: HeaderHeight,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  }
});