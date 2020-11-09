import { useMutation } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const setUnlockUserRequest = async (requestData: IUseSetBlockUserRequestParams) => {
  if(requestData.UserId !== '') {
    // const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.setBlockUserByUser}`;
    const url = 'https://run.mocky.io/v3/654301d4-dda5-478a-8152-2d0def058f2c';
    const { data } = await axios.post(url, requestData);    
    return data;
  }
};

export function useBlockUser() {
  const [mutate, { isLoading, error }] = useMutation<
    {},
    IErrorResponse,
    IUseSetBlockUserRequestParams
  >(setUnlockUserRequest, {
    onSuccess: () => {
      console.log("User blocked successfully");
    },
  });

  const setBlockUser = async (UserId: string) => {    
    return mutate({
      UserId,
    });
  };

  return { setBlockUser, isLoading, error };
}

interface IUseSetBlockUserRequestParams {
  UserId: string;
}
