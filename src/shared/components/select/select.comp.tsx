import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Layout, Colors, FontNames } from '../../../constants';

interface ISelectProps {
  items?: any;
  defaultValue?: any;
  small?: any;
  shadow?: any;
  borderless?: any;
  style?: any,
}

const Select: React.FC<ISelectProps> = ({
  items,
  defaultValue,
  small,
  shadow,
  borderless,
  style
}) => {

  const containerStyle = [
    styles.dropdown,
    shadow && styles.shadow,
    style
  ];

  const styleDropDownPicker = [
    { backgroundColor: Colors.neutral },
    borderless && styles.backgroundless,
    small && styles.smallDropdown,
    style
  ];

  const dropDownStyle = [
    { backgroundColor: Colors.input },
    borderless && { backgroundColor: Colors.white },
    small && styles.smallDropdown,
    style
  ]

  return (
    <DropDownPicker
      items={items}
      defaultValue={defaultValue}
      containerStyle={containerStyle}
      style={styleDropDownPicker}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      dropDownStyle={dropDownStyle}
      labelStyle={{
        fontSize: 22,
        textAlign: 'left',
        color: Colors.default,
        fontFamily: FontNames.CamptonMedium
      }}
    />
  )
}

export default Select;

const styles = StyleSheet.create({
  dropdown: {
    width: Layout.window.width - Layout.base * 2,
    height: Layout.select_height
  },
  smallDropdown: {
    width: Layout.window.width * .2
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  },
  backgroundless: {
    width: Layout.window.width - Layout.base * 2,
    backgroundColor: Colors.transparent,
    height: 50,
    borderRadius: Layout.button_radius,
    borderWidth: 0,
    borderBottomWidth: Layout.select_border_width,
    borderBottomColor: Colors.primary
  }
});