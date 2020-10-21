import { StyleSheet } from 'react-native';
import FontNames from "../../../constants/Fonts";

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    marginTop: 20,
    height: 182,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  video: {
    alignSelf: 'stretch',
    height: 200,
  },
  videoWeb: {
    flex: 1,
    marginTop: 20,
  },
});

export default styles;