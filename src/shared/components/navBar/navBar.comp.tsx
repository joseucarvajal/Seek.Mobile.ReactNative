import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native'
import { Colors, Icons, Layout } from '../../../constants';
import Block from '../block/block.comp'
import Text from '../text/text.comp'
import Icon from '../icons/icon.comp'

export interface INavBarProps {
  back?: any;
  hideLeft?: any;
  hideRight?: any;
  left?: any;
  leftStyle?: any;
  leftIconColor?: any;
  leftHitSlop?: any;
  leftIconSize?: any;
  leftIconName?: any;
  leftIconFamily?: any;
  onLeftPress?: any;
  right?: any;
  rightStyle?: any;
  style?: any;
  styles?: any;
  transparent?: any;
  title?: any;
  titleStyle?: any;
}

const NavBar: React.FC<INavBarProps> = ({
  back,
  hideLeft,
  hideRight,
  left,
  leftStyle,
  leftIconColor,
  leftHitSlop,
  leftIconSize,
  leftIconName,
  leftIconFamily,
  onLeftPress,
  right,
  rightStyle,
  style,
  transparent,
  title,
  titleStyle,
}) => {

  function renderTitle() {
    if (typeof title === 'string') {
      return (
        <View style={styles.title}>
          <Text style={[styles.titleTextStyle, titleStyle]}>{title}</Text>
        </View>
      );
    }

    if (!title) return null;

    return title;
  }

  function renderLeft() {
    if (!hideLeft) {
      if (leftIconName || (back && !left)) {
        return (
          <View style={[styles.left, leftStyle]}>
            <TouchableOpacity onPress={() => onLeftPress && onLeftPress()} hitSlop={leftHitSlop}>
              <Icon
                color={leftIconColor || Colors.primary}
                size={leftIconSize || Layout.base * 1.0625}
                name={leftIconName || (back ? Icons.caret_left : Icons.caret_right)}
              />
            </TouchableOpacity>
          </View>
        );
      }
      return <View style={[styles.left, leftStyle]}>{left}</View>;
    }
    return <View style={[styles.left]} />;
  }
  
  function renderRight() {
    const hasIcons = React.Children.count(right) > 1;
    const rightStyles = [styles.right, rightStyle];
    if (!hideRight) {
      return (
        <Block right row={hasIcons} style={rightStyles}>
          {right}
        </Block>
      );
    }
    return <View style={styles.right} />;
  }
  
  const navStyles = [styles.navBar, transparent && styles.transparent, style];

  return (
    <Block style={navStyles}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </Block>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    width: 'auto',
    height: Layout.base * 4.125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
    paddingVertical: Layout.base,
  },
  title: {
    flex: 2,
    height: Layout.window.height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontWeight: '400',
    fontSize: Layout.base * 0.875,
    color: Colors.black,
  },
  left: {
    flex: 0.5,
    height: Layout.window.height * 0.07,
    justifyContent: 'center',
    marginLeft: Layout.base,
  },
  right: {
    flex: 0.5,
    height: Layout.window.height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Layout.base,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
  },
});