import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Layout } from '../../../constants';

export interface IBlockProps {
  row?: any;
  flex?: any;
  center?: any;
  middle?: any;
  top?: any;
  bottom?: any;
  right?: any;
  left?: any;
  shadow?: any;
  space?: SpaceType;
  fluid?: any;
  height?: any;
  shadowColor?: any;
  card?: any;
  width?: any;
  safe?: any;
  children?: any;
  style?: any;
  styles?: any;
  props?: any;
  padding?: number;
  wrap?: any;
}

export type SpaceType = "evenly" | "between" | "around";

const Block: React.FC<IBlockProps> = ({
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  shadow,
  space,
  fluid,
  height,
  shadowColor,
  card,
  width,
  safe,
  children,
  padding,
  wrap,
  style,
  ...props
}) => {

  const realPadding = safe ? Layout.base : padding;

  const styleBlock = [
    styles.block,
    row && styles.row,
    flex && { flex: flex === true ? 1 : flex },
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },
    shadow && styles.shadow,
    fluid && styles.fluid,
    card && styles.card,
    height && { height },
    width && { width },
    shadowColor && { shadowColor },
    realPadding && { padding: realPadding } as ViewStyle,
    wrap && styles.wrap,
    style,
  ];

  if (safe) {
    return (
      <SafeAreaView style={styleBlock} {...props}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={styleBlock} {...props}>
      {children}
    </View>
  );
}

export default Block;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  card: {
    borderRadius: Layout.card_border_radius,
    borderWidth: Layout.card_border_width,
    borderColor: Colors.block,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  },
  fluid: {
    width: 'auto',
  },
  wrap: {
    flexWrap: 'wrap'
  }
});