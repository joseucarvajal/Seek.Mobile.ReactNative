import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import NotificationsItems from '../../../constants/Notifications';
import { Block, MenuItem } from '../../../shared';
import styles from './notifications.style';

const notifications: React.FC = () => {
  return (    
    <Block flex>
      <ScrollView style={styles.container}>
        <MenuItem items={NotificationsItems} />
      </ScrollView>
    </Block>
  );
};

export default notifications;
