import { queryCache, useMutation } from "react-query";
import { ApiEndPoints } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useApiAuth } from "../../api";

export function useUnlockUser() {
  const api = useApiAuth();
  
  const [mutate, { isLoading, error, data }] = useMutation<
    {},
    IErrorResponse,
    IUseSetUnlockUserRequestParams
  >(
    async (
      requestData: IUseSetUnlockUserRequestParams
    ): Promise<{}> => {
      const { data } = await api.post(
        `${ApiEndPoints.myconnections.unblock}`,
        requestData
      );
      return data;
    },
    {
      onSuccess: async () => {
        console.log("User unblocked");
        queryCache.invalidateQueries(ApiEndPoints.myconnections.blockedUsers);
      },
    }
  );

  const setUnlockUser = async (Id: string) => {    
    return mutate({
      id: Id,
    });
  };

  return { setUnlockUser, isLoading, data, error };
}

interface IUseSetUnlockUserRequestParams {
  id: string;
}
