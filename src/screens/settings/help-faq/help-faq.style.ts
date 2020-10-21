import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  body: {
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
  },
});

export default styles;