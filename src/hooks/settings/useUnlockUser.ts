import { useMutation } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const setUnlockUserRequest = async (requestData: IUseSetUnlockUserRequestParams) => {
  // if(requestData.UserId !== '') {
    // const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.setUnlockUserByUser}`;
    const url = 'https://run.mocky.io/v3/654301d4-dda5-478a-8152-2d0def058f2c';
    const { data } = await axios.post(url, requestData);    
    return data;
  // }
};

export function useUnlockUser() {
  const [mutate, { isLoading, error }] = useMutation<
    {},
    IErrorResponse,
    IUseSetUnlockUserRequestParams
  >(setUnlockUserRequest, {
    onSuccess: () => {
      console.log("User unlocked successfully");
    },
  });

  const setUnlockUser = async (UserId: string) => {    
    return mutate({
      UserId,
    });
  };

  return { setUnlockUser, isLoading, error };
}

interface IUseSetUnlockUserRequestParams {
  UserId: string;
}
