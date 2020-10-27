import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Block from '../block/block.comp';
import { Colors, Icons, isIOS, Layout } from '../../../constants';
import Button from '../button/button.comp';
import Text from '../text/text.comp';
import Icon from '../icons/icon.comp';

export interface ICalendarProps {
  date?: any;
  show?: any;
  style?: any;
}

const Calendar: React.FC<ICalendarProps> = ({
  date,
  show,
  style
}) => {

  const [value, SetDate] = useState(date)
  const [isShow, SetShow] = useState(show)

  const onChange = (event: any, newDate: any) => {
    if (newDate === undefined) {
      SetShow(false)
    }
    else {
      if (!isIOS) {
        SetShow(false)
      }
      SetDate(newDate)
    }
  };

  return (
    <Block>
      <Button
        style={[styles.buttonDataPicker]}
        onPress={() => SetShow(!isShow)}
      >
        <Block flex row center style={style}>
          <Block flex left>
            <Text h2 bold>{moment(value).format('DD/MM/YYYY')}</Text>
          </Block>
          <Block flex right>
            <Icon family='seekQ' name={Icons.calendar} size={24} color={Colors.black} />
          </Block>
        </Block>
      </Button>
      {isShow &&
        <DateTimePicker
          value={moment(value).toDate()}
          mode={'date'}
          display="default"
          locale="es-ES"
          onChange={onChange}
          minimumDate={new Date(1920, 0, 1)}
          maximumDate={new Date()}
        />
      }
    </Block>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  containerDataPicker: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonDataPicker: {
    borderWidth: 0,
    backgroundColor: "white",
    borderBottomColor: Colors.muted,
    borderBottomWidth: Layout.input_calendar_border_width
  }
}); 