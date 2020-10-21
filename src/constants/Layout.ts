import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const base = 16;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  base: base,
  fontSize: 16,
  opacity: 0.8,
  // Button styles
  button_radius: 25,
  // Dropdown styles
  dropdown_radius: 3,
  // Social Button styles
  socialbutton_radius: 5,
  // Chips styles
  chips_radius: 16,
  // Input styles
  input_radius: 0,
  input_border_width: 3,
  input_height: 50,
  input_text_size: 17,
  input_label_text_size: 12,
  input_vertical_text: 14,
  input_vertical_label: 8,
  input_help_text: 8,
  input_rounded: 5,
  // Select styles
  select_height: 50,
  select_border_width: 3,
  // Menu styles
  menu_item_height: 58,
  // Block styles
  block_shadow_opacity: 0.15,
  block_shadow_radius: 8,
  android_elevation: 3,
  // card styles
  card_border_radius: base * 0.4,
  card_border_width: base * 0.05,
  card_width: width - (base * 2),
  card_margin_vertical: base * 0.875,
  card_footer_horizontal: base * 0.75,
  card_footer_vertical: base * 0.75,
  card_avatar_width: base * 2.5,
  card_avatar_height: base * 2.5,
  card_avatar_radius: base * 1.25,
  card_image_height: base * 12.5,
  card_round: base * 0.1875,
  card_rounded: base * 0.5,
  // accordion styles
  accordion_border_radius: 3,
};