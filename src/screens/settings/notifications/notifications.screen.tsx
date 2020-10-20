import React from 'react';
import { SafeAreaView, View } from 'react-native';
import NotificationsItems from '../../../constants/Notifications';
import { MenuItem } from '../../../shared';
import styles from './notifications.style';

const notifications: React.FC = () => {
  return (    
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <View style={styles.body}>
          <MenuItem items={NotificationsItems} />
        </View>
      </View>
    </SafeAreaView>  
  );
};

export default notifications;
