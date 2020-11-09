import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse, IApplicationUser } from "../../shared";
import { useIdentityState } from "../../providers/identity";
import { ApiEndPoints } from "../../constants";
import { useApiAnonymous } from "../../api";

export function useCheckVerificationCode() {

  const navigation = useNavigation();
  const api = useApiAnonymous();
  const { applicationUser } = useIdentityState();

  const doRequestFn = async (
    requestData: ICheckVerificationCodeRequestParams
  ): Promise<IApplicationUser> => {
    const { data } = await api.post(
      `${ApiEndPoints.identity.checkVerificationCode}`,
      requestData
    );
    return data;
  };

  const [mutate, { isLoading, error, data }] = useMutation<
    IApplicationUser,
    IErrorResponse,
    ICheckVerificationCodeRequestParams
  >(doRequestFn,
    {
      onSuccess: (responseData: IApplicationUser) => {
        if (responseData.emailConfirmed || responseData.phoneNumberConfirmed) {
          navigation.navigate("SignUpCreatePassword", {
            phoneNumberOrEmail: applicationUser?.phoneNumber,
          });
        }
      },
    }
  );

  const verifyCode = async (phoneOrEmail: string, codeToVerify: string) => {
    return mutate({
      userId: applicationUser?.id,
      phoneOrEmail,
      codeToVerify,
    });
  };

  return { verifyCode, isLoading, data, error };
}

interface ICheckVerificationCodeRequestParams {
  userId?: string;
  phoneOrEmail: string;
  codeToVerify: string;
}
