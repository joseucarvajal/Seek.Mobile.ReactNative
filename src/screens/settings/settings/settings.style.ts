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
  title: {
    ...getFontStyle('font14Line16'),
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: Colors.title
  },
  headerView: {
    width: '100%', 
    backgroundColor: Colors.settings.background,
    textShadowColor: Colors.settings.boxShadowColor,
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    position: 'absolute',
    top: 5,
    color: Colors.title,
  },
  body: {
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
  },
  footerView:{
    flex: 1,
    width: '100%', 
    // height: 40, 
    backgroundColor: Colors.white, 
    // justifyContent: 'center', 
    // alignItems: 'center',
    position: 'absolute',
    bottom: 0
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