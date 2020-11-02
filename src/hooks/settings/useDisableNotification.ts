import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const disableNotification = async (
  _: any,
  notificationTypeUser: IDisableNotificationParams
) => {
  if(notificationTypeUser.id !== '') {
    const url = `${API_URL_DEV}${ApiEndPoints.settings.disableNotificationByUser}`;
    const { data } = await axios.post(url, notificationTypeUser);
    return data;
  }
};

export function useDisableNotification(
  data: IDisableNotificationParams
) {
  return useQuery<boolean, IErrorResponse>(
    ["/notifications/user/disable", data],
    disableNotification
  );
}

export interface IDisableNotificationParams {
  id: string;        
}
