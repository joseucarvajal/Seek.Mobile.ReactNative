import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from '../text/text.comp'
import Icon from '../icons/icon.comp'
import ToggleButton from '../../components/toggle-button/toggle-button.comp'
import { Layout, Colors } from '../../../constants'

interface IMenuItemProps {
  items: any;
  props?: any;
}

const MenuItem: React.FC<IMenuItemProps> = ({ items }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: any }) => {
    return (
      <>
        {
          item.type === 'toggle' ?
            <View style={[styles.container, { backgroundColor: item.color }]}>
              <Text fontSize={16}>{item.title}</Text>
              <ToggleButton color='primary' value={item.value} onValueChange={() => item?.action && item.action(!item.value) } />
            </View>
          : 
            <TouchableOpacity style={[styles.container, { backgroundColor: item.color }]} onPress={() => item?.navigate && navigation.navigate(item.navigate)}>
                <Text fontSize={16}>{item.title}</Text>
                <Icon family='FontAwesome' name="angle-right" color={Colors.black} size={32} style={{ paddingRight: 5 }} />
            </TouchableOpacity>
        }
      </>
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item, _) => item.id}
      renderItem={renderItem}
    />
  );
};

export default MenuItem;

const styles = StyleSheet.create({
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
    backgroundColor: Colors.neutral,
    width: Layout.window.width,
    height: Layout.menu_item_height,
  }
});