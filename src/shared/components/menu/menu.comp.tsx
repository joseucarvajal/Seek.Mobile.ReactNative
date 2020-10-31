import React, { useState } from 'react';
import { FlatList, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Block from '../block/block.comp';
import Text from '../text/text.comp';

import { Colors } from '../../../constants';
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
    <Block flex key={item.id}>
      <MenuItem {...item} style={style} onPress={() => navigation.navigate(item.navigate)} onValueChange={(value: boolean) => item.action(value)} />
    </Block>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ backgroundColor: Colors.white }}
    />
  );
};

export default Menu;