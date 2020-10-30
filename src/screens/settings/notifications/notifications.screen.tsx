import React, { useCallback } from 'react';
import { 
  Block,
  Menu,
  Spinner,
  DisplayError
} from '../../../shared';
import {
  INotification,
  useGetUserNotifications,
  useEnableNotification,
  useDisableNotification
} from '../../../hooks/settings';
import { Colors } from '../../../constants';

export interface INotificationsProps {}

const Notifications: React.FC<INotificationsProps> = () => {
  const userId = '545DE66E-19AC-47D2-57F6-08D8715337D7';
  const {
    error,
    data,
    isLoading
  } = useGetUserNotifications(userId);

  const enableNotification = useCallback((id) => {
    const { data: isEnable } = useEnableNotification({ id });
    console.log(isEnable);
  }, [useEnableNotification]);

  const disableNotification = useCallback((id) => {
    const { data: isDisable } = useDisableNotification({ id });
    console.log(isDisable);
  }, [useDisableNotification]);

  const mappingData = () => {
    return data?.map(( notification: INotification, index: number ) => ({
      id: notification.idNotification, 
      title: notification.notificationName, 
      type: 'toggle', 
      color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 
      value: notification.active,
      action: function(active: boolean) {
        // if(active) {
        //   enableNotification(notification.idNotification);
        // } else {
        //   disableNotification(notification.idNotification);
        // }
        console.log(`${notification.notificationName} active: ${active}`);
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
