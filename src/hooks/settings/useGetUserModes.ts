import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const getModes = async (
  _: any,
  userId: string
) => {
  const url = `${API_URL_DEV}${ApiEndPoints.settings.modesTypesByUser}/${userId}`;
  const { data } = await axios.get(url);
  return data;
};

export function useGetUserModes(
  userId: string
) {
  return useQuery<IMode[], IErrorResponse>(
    ["/notifications/user/", userId],
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
