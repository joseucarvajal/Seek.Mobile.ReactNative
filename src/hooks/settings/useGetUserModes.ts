import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";

const getModes = async (
  _: any,
  userId: string
) => {
  const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.modesTypesByUser}/${userId}`;
  const { data } = await axios.get(url);
  return data;
};

export function useGetUserModes() {
  const { applicationUser } = useIdentityState();
  return useQuery<IMode[], IErrorResponse>(
    ["/notifications/user/", applicationUser?.id],
    getModes,
    {
      cacheTime: 0,
    }
  );
}

export interface IMode {
  idMode: string;        
  modeName: string;
  active: boolean;
}
