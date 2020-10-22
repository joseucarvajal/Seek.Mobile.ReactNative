import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableHighlight, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from '../text/text.comp';
import Icon from '../icons/icon.comp'
import Block from '../block/block.comp';

import ToggleButton from '../../components/toggle-button/toggle-button.comp';
import { Layout, Colors, FontNames } from '../../../constants';
import { wait } from '../../../constants/Utils';

interface IMenuItemProps {
  items: any;
  props?: any;
};

interface IBlockMenuItem {
  title: string;
  id: string;
  type: string;
  color: any;
  action?: any;
  navigate?: any;
  value?: any;
}

const BlockMenuItem: React.FC<IBlockMenuItem> = ({
  title,
  id,
  type,
  color,
  action,
  navigate,
  value
}) => {
  const [touchable, setTouchable] = useState(false);
  const navigation = useNavigation();
  
  const handleChangeValue = (valueChanged: any) => {
    action(valueChanged);
  };

  const handlePressTouchable = () => {
    setTouchable(!touchable);
    if(navigate) {
      navigation.navigate(navigate);
    }
  };

  return (
    <Block>
      {
        type === 'toggle' ?
          <Block flex style={[styles.container, { backgroundColor: color, width: '100%' }]}>
            <Block style={[styles.container, { backgroundColor: color, width: '100%' }]} flex>
              <Text fontSize={16} style={[ styles.noTouchableText ]} >{title}</Text>
              <ToggleButton color='primary' value={value} onValueChange={handleChangeValue} />
            </Block>
          </Block>
        : 
        <TouchableHighlight style={[ styles.container, touchable ? styles.touchableIn : styles.touchableOut ]} onPress={() => handlePressTouchable()}>
          <Block style={styles.container}>
            <Text fontSize={16} style={[ touchable ? styles.touchableText : styles.noTouchableText ]}>{title}</Text>
            <Icon family="FontAwesome" name="angle-right" color={touchable ? Colors.fontNormal : Colors.noTouchableIcon} size={32} style={[{ paddingRight: 5 }]} />
          </Block>
        </TouchableHighlight>
      }
    </Block>
  );
};

const MenuItem: React.FC<IMenuItemProps> = ({ items }) => {
  const renderItem = ({ item }: { item: IBlockMenuItem }) => (
    <BlockMenuItem {...item} />
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
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