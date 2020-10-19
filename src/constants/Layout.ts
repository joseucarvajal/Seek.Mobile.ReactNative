import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  base: 16,
  fontSize: 16,
  opacity: 0.8,
  button_radius: 25,
  dropdown_radius: 3,
  socialbutton_radius: 5,
  chips_radius: 16,
  input_radius: 0,
  input_border_width: 3,
  input_height: 50,
  input_text_size: 17,
  input_label_text_size: 12,
  input_vertical_text: 14,
  input_vertical_label: 8,
  input_help_text: 8,
  input_rounded: 5,
  select_height: 50,
  menu_item_height: 58
};