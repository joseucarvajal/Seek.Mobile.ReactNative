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
  button_radius: 40,
  dropdown_radius: 3,
  socialbutton_radius: 5,
  chips_radius: 16
};