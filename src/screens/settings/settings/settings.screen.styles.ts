import { StyleSheet } from 'react-native';
import FontNames from "../../../constants/Fonts";

const colors = {
  title: '#00B5D2',
  background: '#F6F6F6',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: colors.background,
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
  },
  title: {
    fontFamily: FontNames.Campton,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: colors.title
  }
});
  
export default styles