import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../constants';
import Block from '../block/block.comp';
import Text from '../text/text.comp';

export interface IChipsProps {
  value: any;
  onPress?: any;
  style?: any;
}

const Chip: React.FC<IChipsProps> = ({
  value,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Block center middle row space='between' style={[styles.chip, style]}>
        <Block center middle style={{ paddingLeft: 8, paddingRight: 8 }}>
          <Text h3 center>{value}</Text>
        </Block>
        <Block center middle style={styles.button}>
          <Text h3 center>x</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default Chip;

const styles = StyleSheet.create({
  chip: {
    backgroundColor: Colors.tertiary,
    margin: 4,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    height: 32,
    alignSelf:"flex-start",
    alignContent: "flex-start"
  },
  button: {
    borderRadius: 20,
    width: 23,
    height: 23,
    backgroundColor: Colors.neutral,
    alignItems: 'center',
    justifyContent: 'center'
  }
})