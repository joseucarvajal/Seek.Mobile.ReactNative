import React from 'react';	
import { 	
  Block,	
  Menu,	
  Spinner,	
  DisplayError	
} from '../../../shared';	
import {	
  INotification,	
  useGetUserNotifications,	
  useSetToggleNotification
} from '../../../hooks/settings';	
import { Colors } from '../../../constants';	

export interface INotificationsProps {}	

const Notifications: React.FC<INotificationsProps> = () => {	
  const {	
    error,	
    data,	
    isLoading	
  } = useGetUserNotifications();

  const { setToggleNotification } = useSetToggleNotification();

  const mappingData = () => {	
    return data?.map(( notification: INotification, index: number ) => ({	
      id: notification.idNotification, 	
      title: notification.notificationName, 	
      type: 'toggle', 	
      color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 	
      value: notification.active,	
      action: (active: boolean) => {	
        setToggleNotification(notification.idNotification, active);
      },	
    }));	
  };	


  return (	
    <Block flex center>	
      <Spinner visible={isLoading} />	
      <DisplayError errorResponse={error} />	
      <Menu items={mappingData()}/>	
    </Block>	
  );	
};	

export default Notifications;