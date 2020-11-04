import React from 'react';
import { StyleSheet, TouchableHighlight } from "react-native";

import Text from '../text/text.comp'
import Icon from '../icons/icon.comp'
import ToggleButton from '../../components/toggle-button/toggle-button.comp'
import { Layout, Colors } from '../../../constants'
import Block from '../block/block.comp';
import Image from '../image/image.comp';

interface IMenuItemProps {
  avatar?: string,
  title: string,
  type: MenuItemType;
  color?: any;
  value?: any;
  onPress?: any;
  onValueChange?: any;
  style?: any;
}

export type MenuItemType = "toggle" | "Button" | "swipeable";

const MenuItem: React.FC<IMenuItemProps> = ({
  avatar,
  title,
  type,
  color,
  value,
  onPress,
  onValueChange,
  style
}) => {
  return (
    <>
      {
        type === 'swipeable' ?
          <Block flex row style={[styles.containerSwipeableItem, { backgroundColor: color }, style]}>
            <Image size="avatar" source={{ uri: avatar }} />
            <Text fontSize={Layout.fontSize} style={styles.stylesText}>{title}</Text>
          </Block>
          : type === 'toggle' ?
            <Block flex row center space='between' style={[styles.container, { backgroundColor: color }, style]}>
              <Text fontSize={Layout.fontSize}>{title}</Text>
              <ToggleButton color='primary' value={value} onValueChange={onValueChange} />
            </Block>
            :
            <TouchableHighlight underlayColor={Colors.active} onPress={onPress}>
              <Block flex row center space='between' style={[styles.container, { backgroundColor: color }, style]}>
                <Text fontSize={Layout.fontSize}>{title}</Text>
                <Icon family='FontAwesome' name="angle-right" color={Colors.black} size={32} style={{ paddingRight: 5 }} />
              </Block>
            </TouchableHighlight>
      }
    </>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Layout.base,
    backgroundColor: Colors.neutral,
    width: Layout.window.width,
    height: Layout.menu_item_height,
  },
  containerSwipeableItem: {
    paddingHorizontal: Layout.base,
    backgroundColor: Colors.neutral,
    width: Layout.window.width,
    height: Layout.menu_item_height,
    paddingLeft: 30,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start'
  },
  stylesText: {
    paddingLeft: 30,
  }
});