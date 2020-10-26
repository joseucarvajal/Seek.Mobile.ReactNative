import React, { useState } from 'react';
import { StyleSheet, FlatList, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Block from '../block/block.comp';

import { Layout, Colors, FontNames } from '../../../constants';
import MenuItem from '../menu-item/menu-item.comp';

interface IMenuItemProps {
  items: any;
  style?: ViewStyle;
};


const Menu: React.FC<IMenuItemProps> = ({
  items,
  style
}) => {
  const [] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: any }) => (
    <Block style={styles.blockMenuItem}>
      {item.type === 'button' ? (
        <MenuItem {...item} style={style} onPress={() => navigation.navigate(item.navigate)} />
      ) : (
        <MenuItem {...item} style={style} onValueChange={() => item.action(!item.value)} />
      )}
    </Block>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default Menu;

const styles = StyleSheet.create({
  blockMenuItem: {
    flex: 1,
  },
  settings: {
    paddingVertical: Layout.base / 3,
  },
  title: {
    paddingTop: Layout.base,
    paddingBottom: Layout.base / 2,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.base,
    // backgroundColor: Colors.white,
    width: '100%',
    height: Layout.menu_item_height,
  },
  touchableIn: {
    backgroundColor: Colors.neutral,
  },
  touchableOut: {
    backgroundColor: Colors.white,
  },
  noTouchableText: {
    color: Colors.noTouchableText,
    fontFamily: FontNames.CamptonSemiBold
  },
  touchableText: {
    color: Colors.fontNormal,
    fontFamily: FontNames.CamptonSemiBold
  }
});