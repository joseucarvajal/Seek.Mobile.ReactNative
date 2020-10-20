import { StyleSheet } from 'react-native';
import FontNames from "../../../constants/Fonts";

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  video: {
    alignSelf: 'stretch',
    height: 200,
  }
});

export default styles;