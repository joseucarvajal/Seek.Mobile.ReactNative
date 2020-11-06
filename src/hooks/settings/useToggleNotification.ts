import { useQueryCache, useMutation } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const setToggleNotificationRequest = async (requestData: IUseSetToggleNotificationRequestParams) => {
  if(requestData.id !== '') {
    const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.toggleNotificationByUser}`;
    const { data } = await axios.post(url, requestData);    
    return data;
  }
};

export function useToggleNotification() {
  const queryCache = useQueryCache();
  const [mutate, { isLoading, error }] = useMutation<
    {},
    IErrorResponse,
    IUseSetToggleNotificationRequestParams
  >(setToggleNotificationRequest, {
    onSuccess: async () => {
      queryCache.invalidateQueries(ApiEndPoints.settings.notificationsTypesByUser);
    },
  });

  const setToggleNotification = async (UserNotificationTypeId: string, active: boolean) => {    
    return mutate({
      id: UserNotificationTypeId,
      active,
    });
  };

  return { setToggleNotification, isLoading, error };
}

interface IUseSetToggleNotificationRequestParams {
  id: string;
  active: boolean;
}
