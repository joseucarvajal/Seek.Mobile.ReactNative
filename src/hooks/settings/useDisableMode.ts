import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const disableMode = async (
  _: any,
  modeTypeUser: IDisableModeParams
) => {
  if(modeTypeUser.id !== '') {
    const url = `${API_URL_DEV}${ApiEndPoints.settings.disableModeByUser}`;
    const { data } = await axios.post(url, modeTypeUser);    
    return data;
  }
};

export function useDisableMode(
  data: IDisableModeParams
) {
  return useQuery<boolean, IErrorResponse>(
    ["/modes/user/disable", data],
    disableMode,
    {
      cacheTime: 0,
    }
  );
}

export interface IDisableModeParams {
  id: string;        
}
