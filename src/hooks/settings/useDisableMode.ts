import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';
import { IErrorResponse } from "../../shared";

const disableMode = async (
  _: any,
  modeTypeUser: IDisableModeParams
) => {
  const url = `${API_URL_DEV}${api.settings.disableModeByUser}`;
  const { data } = await axios.post(url, modeTypeUser);
  return data;
};

export function useDisableMode(
  data: IDisableModeParams
) {
  return useQuery<boolean, IErrorResponse>(
    ["/modes/user/disable", data],
    disableMode
  );
}

export interface IDisableModeParams {
  id: string;        
}
