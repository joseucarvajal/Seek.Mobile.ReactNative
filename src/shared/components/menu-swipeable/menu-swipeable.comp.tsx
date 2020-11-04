import React, { useState } from 'react';
import { StyleSheet, FlatList, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SwipeableFlatList from "react-native-swipeable-list";

import { Icon, Block, Text } from '../../../shared';

import { Colors, Icons } from '../../../constants';
import MenuItem from '../menu-item/menu-item.comp';

interface IMenuItemProps {
  items: any;
  style?: ViewStyle;
};


const MenuSwipeable: React.FC<IMenuItemProps> = ({
  items,
  style
}) => {
  const [] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: any }) => (
    <Block flex>
      <MenuItem {...item} style={style} />
    </Block>
  );

  const extractItemKey = (item: any) => {
    return item.id.toString();
  };

  const quickActions = (index: any, item: any) => {
    return (
      <Block flex style={styles.containerAction}>
        <Block flex style={[styles.button]}>
          <Icon
            family={"FontAwesome"}
            name={Icons.locked}
            size={18}
            style={{ marginRight: 5 }}
            color={Colors.white}
          />
          <Text style={[styles.buttonText, styles.button1Text]} onPress={() => item.action(item.id)}>Unblock</Text>
        </Block>
      </Block>
    );
  };

  return (
    <SwipeableFlatList
      data={items}
      keyExtractor={extractItemKey}
      renderItem={renderItem}
      maxSwipeDistance={130}
      renderQuickActions={({index, item}: any) => quickActions(index, item)}
      contentContainerStyle={styles.contentContainerStyle}
      shouldBounceOnMount={true}
    />
  );
};

export default MenuSwipeable;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: Colors.unblock,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  buttonText: {
    fontWeight: '500',
  },
  button1Text: {
    color: Colors.white,
  },
});