import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';

export const getNotifications = async () => {
  try {
      // esta es
      // fetch('http://172.18.55.193:32701/api/v1/notifications/user/545DE66E-19AC-47D2-57F6-08D8715337D7', {
      //   method: 'GET',
      //   redirect: 'follow'
      // })
      //   .then(response => response.json())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
    console.log('llega 2');
    fetch('http://192.168.1.57:32701/api/v1/notifications/user/545DE66E-19AC-47D2-57F6-08D8715337D7', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  } catch (error) {
    console.log('error',error);
  }
};

export default function useNotifications() {
  return useQuery("notifications", getNotifications);
}