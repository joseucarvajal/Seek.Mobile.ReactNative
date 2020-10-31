import { useQuery } from "react-query";
import axios from "axios";
import { api, API_URL_DEV } from '../../constants/Endpoints';
import { IErrorResponse } from "../../shared";

const enableMode = async (
  _: any,
  modeTypeUser: IEnableModeParams
) => {
  if(modeTypeUser.id !== '') {
    const url = `${API_URL_DEV}${api.settings.enableModeByUser}`;
    const { data } = await axios.post(url, modeTypeUser);
    return data;
  }
};

export function useEnableMode(
  data: IEnableModeParams
) {
  return useQuery<boolean, IErrorResponse>(
    ["/modes/user/enable", data],
    enableMode,
    {
      cacheTime: 0,
    }
  );
}

export interface IEnableModeParams {
  id: string;        
}
