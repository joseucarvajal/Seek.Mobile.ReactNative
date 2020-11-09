import { queryCache, useQuery } from "react-query";
import { ApiEndPoints } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";
import { useApiAuth } from "../../api";

export function useGetBlockedPeople() {
  const api = useApiAuth();

  const { applicationUser } = useIdentityState();
  return useQuery<IGetBlockedPeople[], IErrorResponse>(
    [ApiEndPoints.myconnections.blockedUsers, applicationUser?.id],
    async (_: any, userId: string): Promise<IGetBlockedPeople[]> => {
      const { data } = await api.get(
        `${ApiEndPoints.myconnections.blockedUsers}/${userId}/blockedusers`
      );
      return data;
    },
    {
      retry: 1,
      cacheTime: 0,
      onSuccess: async () => {
        console.log("New unblocked updated");
        queryCache.invalidateQueries(ApiEndPoints.myconnections.blockedUsers);
      },
    }
  );
}

export interface IGetBlockedPeople {
  idConnection: string;
  avatar: string;        
  fullName: string;
  age: number;
  userId: string;
  connectionUserId: string;
}
