import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const enableNotification = async (
  _: any,
  notificationTypeUser: IEnableNotificationParams
) => {
  if(notificationTypeUser.id !== '') {
    const url = `${API_URL_DEV}${ApiEndPoints.settings.enableNotificationByUser}`;
    const { data } = await axios.post(url, notificationTypeUser);
    return data;
  }
};

export function useEnableNotification(
  data: IEnableNotificationParams
) {
  return useQuery<boolean, IErrorResponse>(
    ["/notifications/user/enable", data],
    enableNotification
  );
}

export interface IEnableNotificationParams {
  id: string;        
}
