import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, ViewStyle } from "react-native";
import { Colors, Layout } from "../../../constants";
import Text from "../text/text.comp"
import Icon from "../icons/icon.comp";
import Block from "../block/block.comp";

interface IAccordion {
  title: string,
  text: any;
  shadow?: any;
  style?: ViewStyle;
  expanded?: any;
}

const Accordion: React.FC<IAccordion> = ({
  title,
  text,
  shadow,
  style,
  expanded: expandedProps
}) => {
  const [expanded, setExpanded] = useState(expandedProps);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <Block shadow={shadow} style={[style, expanded && { paddingBottom: Layout.base }]}>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text h3 style={styles.title}>{title}</Text>
        <Icon family='FontAwesome' name={expanded ? 'chevron-up' : 'chevron-down'} size={30} color={Colors.black} />
      </TouchableOpacity>
      <Block style={styles.parent} />
      {expanded && (
        <Block shadow={shadow} style={styles.child}>
          <Text h3 style={styles.title}>{text}</Text>
        </Block>
      )}
    </Block>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: Layout.base,
    paddingRight: Layout.base,
    alignItems: 'center',
    backgroundColor: Colors.tabs,
    borderRadius: Layout.accordion_border_radius
  },
  parent: {
    height: Layout.base,
    color: Colors.white,
    width: '100%'
  },
  child: {
    backgroundColor: Colors.gray,
    padding: Layout.base,
    borderRadius: Layout.accordion_border_radius
  }
});