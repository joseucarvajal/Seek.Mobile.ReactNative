import React, { useCallback, useRef, useEffect, useState } from 'react';
import { setConsole } from 'react-query'
import axios from "axios";
import NotificationsItems from '../../../constants/Notifications';
import { Block, Button, ButtonPrimary, Menu, Text } from '../../../shared';
// import { getNotifications } from '../../../hooks/settings/useSettings';

const Notifications: React.FC = () => {
  // const [notificationsItems, setNotificationsItems] = useState([]);
  // const [status, setStatus] = useState('');
  // const { data, status = false } = useNotifications();
  // console.log('data', data);
  // setConsole({
  //   log: console.log,
  //   warn: console.warn,
  //   error: console.warn,
  // })

  const getNotifications = async () => {
    try {
      console.log('llega 5');
      fetch('http://192.168.1.69:32701/api/v1/notifications/user/545DE66E-19AC-47D2-57F6-08D8715337D7', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log('error',error);
    }
  };

  const initialRender = useRef(true);

  const execute = useCallback(async () => {
    const data = await getNotifications();
    console.log('data', data);
  }, [getNotifications]);
  
  useEffect(() => {
    if (initialRender.current) {
      console.log("entro por false");
      execute();
      initialRender.current = false;
    } else {
      console.log("entro por true");
    }
  }, []);

  // useEffect(() => {
  //   let isSubscribed = true;
  //   execute();
  //   return () => {
  //     isSubscribed = false
  //   };
  // }, []);
  
  return (
      <Block flex center>
        <ButtonPrimary
          onPress={() => getNotifications()}
        >
          Continue
        </ButtonPrimary>
          <Menu items={NotificationsItems} />
      </Block>
  );
};

export default Notifications;
