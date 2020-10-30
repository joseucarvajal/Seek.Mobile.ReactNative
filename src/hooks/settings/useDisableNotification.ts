import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';
import { IErrorResponse } from "../../shared";

const disableNotification = async (
  _: any,
  notificationTypeUser: IDisableNotificationParams
) => {
  const url = `${API_URL_DEV}${api.settings.disableNotificationByUser}`;
  const { data } = await axios.post(url, notificationTypeUser);
  return data;
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
