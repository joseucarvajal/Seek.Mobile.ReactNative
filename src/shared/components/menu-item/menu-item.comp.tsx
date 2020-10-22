import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from '../text/text.comp'
import Icon from '../icons/icon.comp'
import ToggleButton from '../../components/toggle-button/toggle-button.comp'
import { Layout, Colors } from '../../../constants'
import Block from '../block/block.comp';

interface IMenuItemProps {
  title: string,
  type: MenuItemType;
  color?: any;
  value?: any;
  onPress?: any;
  onValueChange?: any;
  style?: any;
}

export type MenuItemType = "toggle" | "Button";

const MenuItem: React.FC<IMenuItemProps> = ({
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
        type === 'toggle' ?
          <Block style={[styles.container, { backgroundColor: color }, style]}>
            <Text fontSize={Layout.fontSize}>{title}</Text>
            <ToggleButton color='primary' value={value} onValueChange={onValueChange} />
          </Block>
          :
          <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: color }, style]}>
            <Text fontSize={Layout.fontSize}>{title}</Text>
            <Icon family='FontAwesome' name="angle-right" color={Colors.black} size={32} style={{ paddingRight: 5 }} />
          </TouchableOpacity>
      }
    </>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Layout.base,
    backgroundColor: Colors.neutral,
    width: Layout.window.width,
    height: Layout.menu_item_height,
  }
});