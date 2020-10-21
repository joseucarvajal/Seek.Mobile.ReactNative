import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Block from '../block/block.comp';
import { Colors, isIOS, Layout } from '../../../constants';
import Button from '../button/button.comp';
import Text from '../text/text.comp';
import Icon from '../icons/icon.comp';

export interface ICalendarProps {
  date?: any;
  show?: any;
}

const Calendar: React.FC<ICalendarProps> = ({
  date,
  show
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
        style={styles.buttonDataPicker}
        onPress={() => SetShow(!isShow)}
      >
        <Block flex row center>
          <Block flex left>
            <Text h2 bold>{moment(value).format('DD/MM/YYYY')}</Text>
          </Block>
          <Block flex right>
            <Icon name={'calendar_1'} size={24} color={Colors.black} />
          </Block>
        </Block>
      </Button>
      {isShow &&
        <Block style={styles.containerDataPicker}>
          <DateTimePicker
            value={moment(value).toDate()}
            mode={'date'}
            display="default"
            locale="es-ES"
            onChange={onChange}
            minimumDate={new Date(1920, 0, 1)}
            maximumDate={new Date()}
          />
        </Block>
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
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: Layout.input_border_width
  }
}); 