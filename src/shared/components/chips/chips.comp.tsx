import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import Chip from './chip.comp';
import Text from '../text/text.comp';

export interface IChipsProps {
  initialChips?: any;
  isFocused?: any;
  chips?: any;
  inputText?: any;
  label?: any;
  style?: any;
  inputStyle?: any;
  alertRequired?: any;
  onChangeChips?: any;
}

const Chips: React.FC<IChipsProps> = ({
  initialChips,
  isFocused = false,
  chips = (initialChips) ? initialChips : [],
  inputText = '',
  label,
  style,
  inputStyle,
  alertRequired,
  onChangeChips
}) => {

  const [chipsState, setChips] = useState(chips)
  const [focusedState, setFocused] = useState(isFocused)
  const [inputTextState, setInputText] = useState(inputText)

  const handleFocus = () => { setFocused(true) }
  const handleChangeText = (text: any) => { setInputText(text) }

  const removeChip = (index: any) => {
    const newArray = [chipsState]
    newArray.splice(index, 1);

    setChips(newArray);
    // onChangeChips(chipsState)

    if (alertRequired) Alert.alert('', 'Removed Successfully')
  }

  const handleBlur = () => {
    if (inputTextState !== '' && chipsState.indexOf(inputTextState) === -1) {

      setChips([chipsState, inputTextState]);
      setInputText("")
      setFocused(false)
      // onChangeChips(chipsState)

      if (alertRequired) Alert.alert('', 'Added Successfully');
    } else {

      setInputText("")
      setFocused(false)
      // onChangeChips(chipsState)

      if (alertRequired) Alert.alert('Added Successfully', 'Chip Element already present');
    }
  }

  const inputLabel = (label) ? label : 'Enter your text'
  const labelStyle = {
    position: 'absolute',
    left: 5,
    top: !focusedState ? 12 : 1,
    fontSize: !focusedState ? 20 : 14,
    color: !focusedState ? '#aaa' : '#000',
  }
  const chipsList = chipsState.map((item: any, index: any) => (
    <Chip
      key={index}
      value={item}
      style={style}
      onPress={() => removeChip(index)} />
  ));

  return (
    <View>
      <View style={{ paddingTop: 18, marginTop: 15 }}>
        <Text style={labelStyle}> {inputLabel} </Text>
        <TextInput
          style={[styles.textInput, inputStyle]}
          onFocus={handleFocus}
          onChangeText={(text) => handleChangeText(text)}
          onSubmitEditing={handleBlur}
          value={inputTextState}
        />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
        {chipsList}
      </View>
    </View>
  );
}

export default Chips;

const styles = StyleSheet.create({
  textInput: {
    height: 32,
    fontSize: 20,
    padding: 7,
    color: '#000'
  }
});