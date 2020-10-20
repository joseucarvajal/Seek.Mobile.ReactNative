import { StyleSheet } from 'react-native';
import { getFontStyle, Colors } from '../../../constants';

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
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
  active: {
    color: Colors.title,
  },
  tab: {
    color: Colors.title,
  },
  infoList: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});
  
export default styles;