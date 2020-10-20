import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';
import { isIOS } from '../../../constants/Utils';
import TutorialVideoView from '../../../constants/TutorialVideo';

import styles from './tutorial-video.style';

const TutorialVideo: React.FC = () => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={ styles.container }>
        {isIOS ? (
          <YouTube videoId={TutorialVideoView} style={styles.video}/>
        ) : (
          <WebView
            style={{ width: '100%', height: 200, alignSelf: 'stretch' }}
            javaScriptEnabled={true}
            source={{ uri: `https://www.youtube.com/embed/${TutorialVideoView}?controls=0&showinfo=0` }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default TutorialVideo;
