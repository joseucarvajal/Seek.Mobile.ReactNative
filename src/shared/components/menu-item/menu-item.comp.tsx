import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../text/text.comp'
import ToggleButton from '../../components/toggle-button/toggle-button.comp'
import { Layout, Colors } from '../../../constants'

interface IMenuItemProps {
  items: any;
  props?: any;
}

interface IMenuItemState {
  value: any;
}

class MenuItem extends React.Component<IMenuItemProps, IMenuItemState> {
constructor(props: IMenuItemProps) {
  super(props);

  this.state = {
      value: 1,
  };

}

renderItem = ({ item }: { item: any }) => (
  <>
    {
      item.type === 'toggle' ?
        <View style={[styles.container, { backgroundColor: item.color }]}>
          <Text size={16}>{item.title}</Text>
          <ToggleButton color='primary' value={true}/>
        </View>
      : 
        <TouchableOpacity style={[styles.container, { backgroundColor: item.color }]}>
            <Text size={16}>{item.title}</Text>
            <Icon name="angle-right" size={32} style={{ paddingRight: 5 }} />
        </TouchableOpacity>
    }
  </>
);

render() {
  return (
      <FlatList
        data={this.props.items}
        keyExtractor={(item, index) => item.id}
        renderItem={this.renderItem}
      />
  )
}
}

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