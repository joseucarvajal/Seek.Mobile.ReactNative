import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
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

  const [active, setActive] = useState(false);

  const hanlerActiveChip = () => {
    setActive(!active);
  };

  const styleChip = [
    styles.container,
    active && { backgroundColor: Colors.active },
    !active && { backgroundColor: Colors.tertiary }
  ]

  const styleTextChip = [
    active && { color: Colors.white },
    !active && { color: Colors.black, top: 3 }
  ]

  return (
    <TouchableHighlight onPress={hanlerActiveChip} underlayColor={Colors.active} style={styleChip}>
      <Block center middle row space='between' style={style}>
        <Block center middle style={{ paddingLeft: 8, paddingRight: 8 }}>
          <Text h3 center style={styleTextChip}>{value}</Text>
        </Block>
        {active &&
          <TouchableOpacity onPress={onPress}>
            <Block center middle style={styles.button}>
              <Text h3 center>x</Text>
            </Block>
          </TouchableOpacity>
        }
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