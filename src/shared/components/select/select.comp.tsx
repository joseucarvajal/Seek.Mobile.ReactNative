import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Layout, Colors, FontNames } from '../../../constants';

interface ISelectProps {
  items?: any;
  defaultValue?: any;
  small?: any;
  shadow?: any;
  borderless?: any;
  props?: any;
  style?: ViewStyle
}

interface ISelectState {
  value: any;
}

class Select extends React.Component<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props);

    this.state = {
      value: 1,
    };

    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect() {
    this.setState((previousState, props) => ({
      value: !previousState.value,
    }));
  }

  render() {

    const containerStyle = [
      styles.dropdown, 
      this.props.shadow && styles.shadow
    ];

    const style = [
      { backgroundColor: Colors.neutral }, 
      this.props.borderless && styles.backgroundless, 
      this.props.small && styles.smallDropdown, 
      this.props.style
    ];

    const dropDownStyle = [
      { backgroundColor: Colors.neutral }, 
      this.props.borderless && { backgroundColor: Colors.white }, 
      this.props.small && styles.smallDropdown, 
      this.props.style
    ]

    return (
      <DropDownPicker
        items={this.props.items}
        defaultValue={this.props.defaultValue}
        containerStyle={containerStyle}
        style={style}
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 3
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