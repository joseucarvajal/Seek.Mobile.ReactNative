import { useQuery } from "react-query";
import { ApiEndPoints } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";
import { useApiAuth } from "../../api";

export function useGetUserNotifications() {
  const api = useApiAuth();
  
  const { applicationUser } = useIdentityState();
  return useQuery<Map<number, INotification>, IErrorResponse>(
    [ApiEndPoints.notificationsandmodessettings.notificationsTypesByUser, applicationUser?.id],
    async (_: any, userId: string): Promise<Map<number, INotification>> => {
      const { data } = await api.get(
        `${ApiEndPoints.notificationsandmodessettings.notificationsTypesByUser}/${userId}`
      );

      let notificationsMap = new Map<number, INotification>();
      for(let notification of data) {
        notificationsMap.set(notification.notificationTypeId, notification);
      }

      return notificationsMap;
    },
  );
}

export interface INotification {
  idNotification: string; 
  notificationTypeId: number;
  notificationTypeName: string;
  active: boolean;
}
