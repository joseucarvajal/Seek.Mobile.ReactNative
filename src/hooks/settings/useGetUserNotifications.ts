import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";

const getNotifications = async (
  _: any,
  userId: string
) => {
  if(userId) {

  }
  const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.notificationsTypesByUser}/${userId}`;
  const { data } = await axios.get(url);
  return data;
};

export function useGetUserNotifications() {
  const { applicationUser } = useIdentityState();
  return useQuery<INotification[], IErrorResponse>(
    ["/notifications/user/", applicationUser?.id],
    getNotifications
  );
}

export interface INotification {
  idNotification: string;        
  notificationName: string;
  active: boolean;
}
