import React from 'react';
import TutorialVideoView from '../../../constants/TutorialVideo';
import styles from './tutorial-video.style';
import { Block, Video } from '../../../shared';

const TutorialVideo: React.FC = () => {
  return (
    <Block style={ styles.container }>
      <Video videoId={TutorialVideoView} />
    </Block>
  );
};

export default TutorialVideo;
