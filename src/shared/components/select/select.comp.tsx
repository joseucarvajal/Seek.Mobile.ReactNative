import React from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Layout, Colors, FontNames } from "../../../constants";
import Block from "../block/block.comp";
import Text from '../text/text.comp'

interface ISelectProps {
  items?: any;
  defaultValue?: any;
  small?: any;
  shadow?: any;
  borderless?: any;
  onChangeItem?: (item: any, index: number) => void;
  style?: any;
  label?: any;
  labelStyles?: any;
  multiple?: any;
}

const Select: React.FC<ISelectProps> = ({
  items,
  defaultValue,
  small,
  shadow,
  borderless,
  onChangeItem,
  style,
  label,
  labelStyles,
  multiple,
}) => {
  const containerStyle = [styles.dropdown, shadow && styles.shadow, style];

  const styleDropDownPicker = [
    { backgroundColor: Colors.neutral },
    borderless && styles.backgroundless,
    small && styles.smallDropdown,
    style,
  ];

  const dropDownStyle = [
    { backgroundColor: Colors.input },
    borderless && { backgroundColor: Colors.white },
    small && styles.smallDropdown,
    style,
  ];

  const labelContent = label && <Text h6 style={[styles.label, labelStyles || {}]}>{label}</Text>;

  return (
    <Block>
      {labelContent}
      <DropDownPicker
        items={items}
        placeholder=""
        multiple={multiple}
        defaultValue={defaultValue ?? null}
        containerStyle={containerStyle}
        style={styleDropDownPicker}
        onChangeItem={onChangeItem}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={dropDownStyle}
        labelStyle={{
          fontSize: 22,
          textAlign: "left",
          color: Colors.default,
          fontFamily: FontNames.CamptonMedium,
        }}
      />
    </Block>
  );
};

export default Select;

const styles = StyleSheet.create({
  dropdown: {
    width: Layout.window.width - Layout.base * 2,
    height: Layout.select_height
  },
  smallDropdown: {
    width: Layout.window.width * 0.22,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  },
  backgroundless: {
    width: 'auto',
    backgroundColor: Colors.transparent,
    height: 50,
    borderWidth: 0,
    borderBottomWidth: Layout.select_border_width,
    borderBottomColor: Colors.primary,
  },
  label: {
    paddingVertical: Layout.select_vertical_label,
  },
});
