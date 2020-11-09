import { useMutation, useQueryCache } from "react-query";
import { ApiEndPoints } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useApiAuth } from "../../api";

export function useToggleMode() {
  const api = useApiAuth();
  const queryCache = useQueryCache();
  
  const [mutate, { isLoading, error, data }] = useMutation<
    {},
    IErrorResponse,
    IUseSetToggleModeRequestParams
  >(
    async (
      requestData: IUseSetToggleModeRequestParams
    ): Promise<{}> => {
      const { data } = await api.post(
        `${ApiEndPoints.notificationsandmodessettings.modesTypesByUser}`,
        requestData
      );
      return data;
    }, 
    {
      onSuccess: () => {
        console.log("Toggle changed successfully");
        queryCache.invalidateQueries(ApiEndPoints.notificationsandmodessettings.modesTypesByUser);
      },
    }
  );

  const setToggleNotification = async (UserModeTypeId: string, active: boolean) => {    
    return mutate({
      id: UserModeTypeId,
      active
    });
  };

  return { setToggleNotification, isLoading, data, error };
}

interface IUseSetToggleModeRequestParams {
  id: string;
  active: boolean;
}
