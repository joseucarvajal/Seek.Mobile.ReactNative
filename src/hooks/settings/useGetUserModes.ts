import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';
import { IErrorResponse } from "../../shared";

const getModes = async (
  _: any,
  userId: string
) => {
  const url = `${API_URL_DEV}${api.settings.modesTypesByUser}/${userId}`;
  const { data } = await axios.get(url);
  return data;
};

export function useGetUserModes(
  userId: string
) {
  return useQuery<IMode[], IErrorResponse>(
    ["/notifications/user/", userId],
    getModes
  );
}

export interface IMode {
  idMode: string;        
  modeName: string;
  active: boolean;
}
