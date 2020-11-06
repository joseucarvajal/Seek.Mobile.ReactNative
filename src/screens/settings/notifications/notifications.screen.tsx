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
  useToggleNotification
} from '../../../hooks/settings';	
import { Colors } from '../../../constants';	

export interface INotificationsProps {}	

const Notifications: React.FC<INotificationsProps> = () => {	
  const {	
    error,	
    data,
    isLoading	
  } = useGetUserNotifications();

  const { setToggleNotification } = useToggleNotification();

  const mappingData = () => {	
    let mapped: any = [];
    let index = 0;
    
    for (let [key, value] of Object(data) ) {
      const { idNotification, notificationTypeName, active } = value;
      mapped.push({
        id: idNotification, 	
          title: notificationTypeName, 	
          type: 'toggle', 	
          color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 	
          value: active,	
          action: (active: boolean) => {	
            setToggleNotification(idNotification, active);
          },	
      });
      index++;
    }

    return mapped;
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