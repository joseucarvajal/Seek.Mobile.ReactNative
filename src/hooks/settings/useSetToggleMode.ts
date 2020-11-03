import { useMutation } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const setToggleModeRequest = async (requestData: IUseSetToggleModeRequestParams) => {
  if(requestData.id !== '') {
    const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.toggleModeByUser}`;
    const { data } = await axios.post(url, requestData);    
    return data;
  }
};

export function useSetToggleMode() {
  const [mutate, { isLoading, error }] = useMutation<
    {},
    IErrorResponse,
    IUseSetToggleModeRequestParams
  >(setToggleModeRequest, {
    onSuccess: () => {
      console.log("Toggle changed successfully");
    },
  });
  const setToggleNotification = async (UserModeTypeId: string, active: boolean) => {    
    return mutate({
      id: UserModeTypeId,
      active
    });
  };

  return { setToggleNotification, isLoading, error };
}

interface IUseSetToggleModeRequestParams {
  id: string;
  active: boolean;
}
