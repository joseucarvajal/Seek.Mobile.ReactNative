import React, { useState } from 'react';
import { StyleSheet, FlatList, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Block from '../block/block.comp';
import Text from '../text/text.comp';

import { Layout, Colors, FontNames } from '../../../constants';
import MenuItem from '../menu-item/menu-item.comp';

interface IMenuItemProps {
  items: any;
  block?: boolean;
  style?: ViewStyle;
};


const Menu: React.FC<IMenuItemProps> = ({
  items,
  block,
  style
}) => {
  const [] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: any }) => (
    <Block key={item.id} style={styles.blockMenuItem}>
      {item.type === 'button' ? (
        <MenuItem {...item} style={style} onPress={() => navigation.navigate(item.navigate)} />
      ) : (
        item?.block ? (
          <>
            <MenuItem {...item} style={style} onValueChange={(value: boolean) => item.action(value)} />
            {item?.block && (
              <Text h6>
                {item?.block}
              </Text>
            )}
          </>
        ) : (
          <MenuItem {...item} style={style} onValueChange={(value: boolean) => item.action(value)} />
        )
      )}
    </Block>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.flatList}
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
    width: '100%',
    height: Layout.menu_item_height,
  },
  flatList: {
    backgroundColor: Colors.white
  }
});