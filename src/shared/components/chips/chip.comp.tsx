import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Colors } from '../../../constants';
import Block from '../block/block.comp';
import Text from '../text/text.comp';

export interface IChipsProps {
  value: any;
  onPress?: any;
  style?: any;
  activeColor?: any;
  inactiveColor?: any;
  textColor?: boolean
}

const Chip: React.FC<IChipsProps> = ({
  value,
  onPress,
  style,
  activeColor,
  inactiveColor,
  textColor
}) => {

  const [active, setActive] = useState(false);

  const hanlerActiveChip = () => setActive(!active)
  
  const hanlerCloseChip = () => {
    setActive(false);
    onPress && active && onPress()
  };

  const styleChip = [
    styles.container,
    active && { backgroundColor: activeColor ? activeColor : Colors.active },
    !active && { backgroundColor: inactiveColor ? inactiveColor : Colors.tertiary }
  ]

  const styleTextChip = [
    active && { color: textColor ? Colors.black : Colors.white },
    !active && { color: Colors.black }
  ]

  return (
    <TouchableHighlight onPress={hanlerActiveChip} underlayColor={Colors.active} style={styleChip}>
      <Block center middle row space='between' style={style}>
        <Block center middle style={{ paddingLeft: 8, paddingRight: 8 }}>
          <Text h3 center style={styleTextChip}>{value}</Text>
        </Block>
          <TouchableOpacity onPress={hanlerCloseChip}>
            <Block center middle style={[styles.button, !active && { backgroundColor: Colors.transparent }]}>
              <Text h3 center style={!active && { color: Colors.transparent }}>x</Text>
            </Block>
          </TouchableOpacity>
      </Block>
    </TouchableHighlight>
  );
}

export default Chip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    margin: 4,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    height: 32,
    alignSelf: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start"
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