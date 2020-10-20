import { StyleSheet } from 'react-native';
import { getFontStyle, Colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 27,
  },
  text: {
    fontWeight: '500',
    ...getFontStyle('font14Line16Centered'),
    color: Colors.dark.menuItem,
  },
  icon: {
    width: 9,
    height: 16
  }
});
  
export default styles