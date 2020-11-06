import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";

const getModesRequestFn = async (
  _: any,
  userId: string
): Promise<Map<number, IMode>> => {
  const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.modesTypesByUser}/${userId}`;
  // const url = 'https://run.mocky.io/v3/d1de5e15-f938-4002-be40-1689e72314bc';
  const { data } = await axios.get(url);

  let modesMap = new Map<number, IMode>();
  for(let mode of data) {
    modesMap.set(mode.modeTypeId, mode);
  }

  return modesMap;
};

export function useGetUserModes() {
  const { applicationUser } = useIdentityState();
  return useQuery<Map<number, IMode>, IErrorResponse>(
    [ApiEndPoints.settings.modesTypesByUser, applicationUser?.id],
    getModesRequestFn
  );
}

export interface IMode {
  idMode: string;     
  modeTypeId: number;
  modeTypeName: string;
  active: boolean;
}
