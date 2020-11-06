import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";

const getNotificationsRequestFn = async (
  _: any,
  userId: string
): Promise<Map<number, INotification>> => {
    const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.notificationsTypesByUser}/${userId}`;
    // const url = 'https://run.mocky.io/v3/3ffda926-dafe-4979-92a5-a785007014d3';
    const { data } = await axios.get(url);

    let notificationsMap = new Map<number, INotification>();
    for(let notification of data) {
      notificationsMap.set(notification.notificationTypeId, notification);
    }

    return notificationsMap;
};

export function useGetUserNotifications() {
  const { applicationUser } = useIdentityState();
  return useQuery<Map<number, INotification>, IErrorResponse>(
    [ApiEndPoints.settings.notificationsTypesByUser, applicationUser?.id],
    getNotificationsRequestFn
  );
}

export interface INotification {
  idNotification: string; 
  notificationTypeId: number; // notificationTypeId  
  notificationTypeName: string; // notificationTypeName
  active: boolean;
}
