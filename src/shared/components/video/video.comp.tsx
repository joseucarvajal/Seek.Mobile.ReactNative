import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export interface IVideoProps {
  videoId: any;
  style?: ViewStyle;
}

const Video: React.FC<IVideoProps> = ({
  videoId,
  style
}) => {
  return (
    <WebView
      style={[styles.video, style]}
      javaScriptEnabled={true}
      source={{ uri: `https://www.youtube.com/embed/${videoId}?controls=1&showinfo=1` }}
    />
  );
}

export default Video;

const styles = StyleSheet.create({
  video: {
    alignSelf: 'stretch',
    height: 200,
  }
});
