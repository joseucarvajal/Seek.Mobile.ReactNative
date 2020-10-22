import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import NotificationsItems from '../../../constants/Notifications';
import { Block, Menu } from '../../../shared';
import styles from './notifications.style';

const notifications: React.FC = () => {
  return (    
    <Block style={ styles.container }>
      <Menu items={NotificationsItems} />
    </Block>
  );
};

export default notifications;
