import React, { useState } from 'react';
import { Alert } from 'react-native';
import Chip from './chip.comp';
import Input from '../text-input/text-input.comp';
import Block from '../block/block.comp';
import { removeLeadingSpaces } from '../../../constants';

export interface IChipsProps {
  initialChips?: any;
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
  inputText = '',
  style,
  alertRequired,
  onChangeChips
}) => {

  const [chipsState, setChips] = useState(initialChips)
  const [inputTextState, setInputText] = useState(inputText)

  const handleChangeText = (text: any) => { setInputText(text) }

  const removeChip = (index: any) => {
    const newArray = [...chipsState]
    newArray.splice(index, 1);
    setChips(newArray);
    onChangeChips(chipsState)
    if (alertRequired) Alert.alert('', 'Removed Successfully')
  }

  const handleBlur = () => {
    if (removeLeadingSpaces(inputTextState) !== '' && chipsState.indexOf(inputTextState) === -1) {
      chipsState.push(inputTextState)
      setChips(chipsState);
      setInputText("")
      onChangeChips(chipsState)
      if (alertRequired) Alert.alert('', 'Added Successfully');
    } else {
      setInputText("")
      onChangeChips(chipsState)
      if (alertRequired) Alert.alert('Added Successfully', 'Chip Element already present');
    }
  }

  const chipsList = chipsState.map((item: any, index: any) => (
    <Chip
      key={index}
      value={item}
      style={style}
      onPress={() => removeChip(index)} />
  ));

  return (
    <Block>
      <Block>
        <Input
          color='primary'
          borderless
          placeholder='Start typing an interest'
          textInputStyle={{ color: 'black' }}
          onChangeText={(text: string) => handleChangeText(text)}
          onSubmitEditing={handleBlur}
          value={inputTextState}
        />
      </Block>
      <Block row center wrap>
        {chipsList}
      </Block>
    </Block>
  );
}

export default Chips;