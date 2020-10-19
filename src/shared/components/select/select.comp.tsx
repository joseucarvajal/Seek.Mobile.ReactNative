import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Layout, Colors } from '../../../constants';

interface ISelectProps {
  items?: any;
  defaultValue?: any;
  shadow?: any;
  props?: any;
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
    return (
        <DropDownPicker
            items={this.props.items}
            defaultValue={this.props.defaultValue}
            containerStyle={[styles.dropdown, this.props.shadow && styles.shadow]}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            labelStyle={{
                fontSize: 16,
                textAlign: 'left',
                color: Colors.default
            }}
        />
    )
  }
}

export default Select;

const styles = StyleSheet.create({
    dropdown: {
      width: Layout.window.width - Layout.base*2,
      height: Layout.select_height
    },
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      elevation: 3
    }
  });