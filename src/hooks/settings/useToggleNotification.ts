import { useQueryCache, useMutation } from "react-query";
import { ApiEndPoints } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useApiAuth } from "../../api";

export function useToggleNotification() {
  const api = useApiAuth();
  const queryCache = useQueryCache();
  
  const [mutate, { isLoading, error, data }] = useMutation<
    {},
    IErrorResponse,
    IUseSetToggleNotificationRequestParams
  >(
    async (
      requestData: IUseSetToggleNotificationRequestParams
    ): Promise<{}> => {
      const { data } = await api.post(
        `${ApiEndPoints.notificationsandmodessettings.toggleNotificationByUser}`,
        requestData
      );
      return data;
    },
    {
      onSuccess: async () => {
        console.log("Toggle changed successfully");
        queryCache.invalidateQueries(ApiEndPoints.notificationsandmodessettings.toggleNotificationByUser);
      },
    }
  );

  const setToggleNotification = async (UserNotificationTypeId: string, active: boolean) => {    
    return mutate({
      id: UserNotificationTypeId,
      active,
    });
  };

  return { setToggleNotification, isLoading, data, error };
}

interface IUseSetToggleNotificationRequestParams {
  id: string;
  active: boolean;
}
