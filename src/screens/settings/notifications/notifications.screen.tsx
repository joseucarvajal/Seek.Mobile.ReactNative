import React from 'react';
import NotificationsItems from '../../../constants/Notifications';
import { Block, Menu } from '../../../shared';

const notifications: React.FC = () => {
  return (    
    <Block flex center>
      <Menu items={NotificationsItems} />
    </Block>
  );
};

export default notifications;
