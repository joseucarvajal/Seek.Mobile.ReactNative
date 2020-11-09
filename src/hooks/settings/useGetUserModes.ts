import { useQuery } from "react-query";
import { ApiEndPoints } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";
import { useApiAuth } from "../../api";

export function useGetUserModes() {
  const api = useApiAuth();

  const { applicationUser } = useIdentityState();
  return useQuery<Map<number, IMode>, IErrorResponse>(
    [ApiEndPoints.notificationsandmodessettings.modesTypesByUser, applicationUser?.id],
    async (_: any, userId: string): Promise<Map<number, IMode>> => {
      const { data } = await api.get(
        `${ApiEndPoints.notificationsandmodessettings.modesTypesByUser}/${userId}`
      );

      let modesMap = new Map<number, IMode>();
      for(let mode of data) {
        modesMap.set(mode.modeTypeId, mode);
      }

      return modesMap;
    },
  );
}

export interface IMode {
  idMode: string;     
  modeTypeId: number;
  modeTypeName: string;
  active: boolean;
}
