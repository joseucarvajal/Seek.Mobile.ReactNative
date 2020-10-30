import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';
import { IErrorResponse } from "../../shared";

const enableNotification = async (
  _: any,
  notificationTypeUser: IEnableNotificationParams
) => {
  const url = `${API_URL_DEV}${api.settings.enableNotificationByUser}`;
  const { data } = await axios.post(url, notificationTypeUser);
  return data;
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
