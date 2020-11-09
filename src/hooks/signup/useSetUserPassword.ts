import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { ApiEndPoints } from "../../constants";
import { useIdentityState } from "../../providers/identity";
import { IErrorResponse } from "../../shared";
import { useApiAnonymous } from "../../api";

export function useSetUserPassword() {
  const navigation = useNavigation();
  const api = useApiAnonymous();
  const { applicationUser } = useIdentityState();
  const doRequestFn = async (requestData: IUseSetUserPasswordRequestParams): Promise<{}> => {
    const { data } = await api.post(
      `${ApiEndPoints.identity.setUserPassword}`,
      requestData
    );
    return data;
  }

  const [mutate, { isLoading, error }] = useMutation<
    {},
    IErrorResponse,
    IUseSetUserPasswordRequestParams
  >(doRequestFn,
    {
      onSuccess: () => {
        navigation.navigate("SignUpReady");
      },
    }
  );

  const setUserPassword = async (password: string, passwordConfirm: string) => {
    return mutate({
      userId: applicationUser?.id,
      password,
      passwordConfirm,
    });
  };

  return { setUserPassword, isLoading, error };
}

interface IUseSetUserPasswordRequestParams {
  userId?: string;
  password: string;
  passwordConfirm: string;
}
