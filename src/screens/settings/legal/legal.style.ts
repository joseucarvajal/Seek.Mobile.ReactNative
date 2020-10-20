import { StyleSheet } from 'react-native';
import FontNames from "../../../constants/Fonts";

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  body: {
    flex: 1,
    top: 80,
    position: 'absolute',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
  },
});

export default styles;