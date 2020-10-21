import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from '../icons/icon.comp';
import Text from '../text/text.comp'

export interface ICheckboxProps {
  id?: any;
  label?: any;
  textStyle?: any;
  iconColor?: any;
  value?: any;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  textStyle,
  iconColor,
  value
}) => {

  const [checked, setChecked] = useState(value)

  const _onPress = () => setChecked(!checked);

  return (
    <TouchableWithoutFeedback
      key={id}
      onPress={() => {
        _onPress();
      }}
    >
      <View
        style={styles.checkboxContainer}
      >
        <Icon
          family='FontAwesome'
          name={checked ? 'check-square' : 'square-o'}
          size={20}
          color={iconColor}
        />
        <View
          style={{ marginLeft: 5 }}
        >
          <Text h3 style={{ ...textStyle }}>{'' + label}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});