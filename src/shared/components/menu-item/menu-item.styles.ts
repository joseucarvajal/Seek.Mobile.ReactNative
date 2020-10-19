import { StyleSheet } from 'react-native';
import FontNames from "../../../constants/Fonts";

const colors = {
  text: '#4f4f4f99',
  container: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: FontNames.Campton,
    backgroundColor: colors.container,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 27,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.text,
  },
  icon: {
    width: 9,
    height: 16
  }
});
  
export default styles