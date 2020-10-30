import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';
import { IErrorResponse } from "../../shared";

const getNotifications = async (
  _: any,
  userId: string
) => {
  const url = `${API_URL_DEV}${api.settings.notificationsTypesByUser}/${userId}`;
  const { data } = await axios.get(url);
  return data;
};

export function useGetUserNotifications(
  userId: string
) {
  return useQuery<INotification[], IErrorResponse>(
    ["/notifications/user/", userId],
    getNotifications
  );
}

export interface INotification {
  idNotification: string;        
  notificationName: string;
  active: boolean;
}
