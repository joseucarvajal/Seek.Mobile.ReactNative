import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import FontNames from '../constants/Fonts';


export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          [FontNames.Campton]: require('../../assets/fonts/Campton-LightDEMO.otf'),
          [FontNames.CamptonBlack]: require('../../assets/fonts/Campton-Black.otf'),          
          [FontNames.CamptonBlackItalic]: require('../../assets/fonts/Campton-BlackItalic.otf'),
          [FontNames.CamptonBold]: require('../../assets/fonts/Campton-Bold.otf'),
          [FontNames.CamptonBoldItalic]: require('../../assets/fonts/Campton-BoldItalic.otf'),
          [FontNames.CamptonBook]: require('../../assets/fonts/Campton-Book.otf'),
          [FontNames.CamptonBookItalic]: require('../../assets/fonts/Campton-BookItalic.otf'),
          [FontNames.CamptonExtraBold]: require('../../assets/fonts/Campton-ExtraBold.otf'),
          [FontNames.CamptonExtraBoldItalic]: require('../../assets/fonts/Campton-ExtraBoldItalic.otf'),
          [FontNames.CamptonExtraLight]: require('../../assets/fonts/Campton-ExtraLight.otf'),
          [FontNames.CamptonExtraLightItalic]: require('../../assets/fonts/Campton-ExtraLightItalic.otf'),
          [FontNames.CamptonLight]: require('../../assets/fonts/Campton-Light.otf'),
          [FontNames.CamptonLightItalic]: require('../../assets/fonts/Campton-LightItalic.otf'),
          [FontNames.CamptonMedium]: require('../../assets/fonts/Campton-Medium.otf'),
          [FontNames.CamptonMediumItalic]: require('../../assets/fonts/Campton-MediumItalic.otf'),
          [FontNames.CamptonSemiBold]: require('../../assets/fonts/Campton-SemiBold.otf'),
          [FontNames.CamptonSemiBoldItalic]: require('../../assets/fonts/Campton-SemiBoldItalic.otf'),
          [FontNames.CamptonThin]: require('../../assets/fonts/Campton-Thin.otf'),
          [FontNames.CamptonThinItalic]: require('../../assets/fonts/Campton-ThinItalic.otf'),
          [FontNames.SeekQIcons]: require('../../assets/fonts/seekqicons.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
