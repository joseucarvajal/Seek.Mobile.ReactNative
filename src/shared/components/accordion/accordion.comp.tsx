import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, ViewStyle, FlatList } from "react-native";
import { Colors, Layout } from "../../../constants";
import Text from "../text/text.comp"
import Icon from '../icons/icon.comp'
import Block from "../block/block.comp";

interface IAccordion {
    // title?: string,
    items?: any;
    // shadow?: any;
    props?: any;
    style?: ViewStyle;
    // expanded?: any;
}

interface IBlockAccordion {
  title: string,
  id: string,
  expanded: boolean,
  shadow: boolean,
  items: any
}

const BlockAccordion: React.FC<IBlockAccordion> = ({
  title,
  expanded,
  shadow,
  items
}) => {
  const [expandedItem, setExpanded] = useState(expanded);
  const [extendPadding, setExpandedPadding] = useState(expandedItem);
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expandedItem);
    setExpandedPadding(!extendPadding);
  }
  
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <Block shadow={shadow} style={[styles.block, extendPadding && { paddingBottom: 16 } ]}>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text h3 style={styles.title}>{title}</Text>
        <Icon family='FontAwesome' name={expandedItem ? 'chevron-up' : 'chevron-down'} size={30} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.parent} />
      {expandedItem && (
        <Block shadow={shadow} style={styles.child}>
          <Text h3 style={styles.title}>{items}</Text>
        </Block>
      )}
    </Block>
  );
};

const Accordion: React.FC<IAccordion> = ({ 
  items,
  props,
  style
}) => {
    const renderItem = ({ item }: { item: any }) => (
      <BlockAccordion {...item} />
    );
    return (
      <FlatList
        data={items}
        keyExtractor={(item, _) => item.id}
        renderItem={renderItem}
      />
    );
};

export default Accordion;

const styles = StyleSheet.create({
    block: {
      flex: 1,
      width: '100%',
    },
    title: {
        fontWeight: '500',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: Colors.tabs,
        borderRadius: Layout.accordion_border_radius
    },
    parent: {
        height: Layout.base,
        color: Colors.white,
        width: '100%',
        flex: 1,
    },
    child: {
        backgroundColor: Colors.gray,
        padding: 16,
        borderRadius: Layout.accordion_border_radius
    }
});