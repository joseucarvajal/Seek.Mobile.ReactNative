import React, { useState } from 'react';
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
  const [notification, setNotification] = useState({ active: false, id: '' });
  const userId = '545DE66E-19AC-47D2-57F6-08D8715337D7';
  const {
    error,
    data,
    isLoading
  } = useGetUserNotifications(userId);

  const { error: isErrorE, data: dataEnableE, isLoading: isLoadingE, refetch: enabledNotification } = useEnableNotification({
    id: notification.id
  });

  const { error: isErrorD, data: dataEnableD, isLoading: isLoadingD, refetch: disableNotification } = useDisableNotification({
    id: notification.id
  });

  const mappingData = () => {
    return data?.map(( notification: INotification, index: number ) => ({
      id: notification.idNotification, 
      title: notification.notificationName, 
      type: 'toggle', 
      color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 
      value: notification.active,
      action: (active: boolean) => {
        setNotification({ active, id: notification.idNotification });
        if(active) {
          enabledNotification();
        }
        else {
          disableNotification();
        }
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
