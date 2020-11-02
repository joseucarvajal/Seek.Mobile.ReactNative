import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse, IApplicationUser } from "../../shared";
import { useIdentityState } from "../../providers/identity";
import { ApiEndPoints } from "../../constants";

const verifyCode = async (
  _: any,
  requestData: ICheckVerificationCodeParams
) => {
  const url = `http://192.168.0.102:32700/api/v1/${ApiEndPoints.signUp.checkVerificationCode}`;
  //const url = `https://run.mocky.io/v3/4d13c141-982d-427d-8627-e3cdfc74530d/`;
  const { data } = await axios.post(url, requestData);
  return data;
};

export function useCheckVerificationCode(
  phoneOrEmail: string,
  codeToVerify: string
) {
  const navigation = useNavigation();
  const { applicationUser } = useIdentityState();

  return useQuery<IApplicationUser, IErrorResponse>(
    [
      ApiEndPoints.signUp.checkVerificationCode,
      {
        userId: applicationUser?.id,
        phoneOrEmail,
        codeToVerify,
      } as ICheckVerificationCodeParams,
    ],
    verifyCode,
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off, manual refetch is needed
      cacheTime: 0,
      onSuccess: (responseData: IApplicationUser) => {
        if (
          responseData?.emailConfirmed ||
          responseData?.phoneNumberConfirmed
        ) {
          navigation.navigate("SignUpCreatePassword", {
            phoneNumberOrEmail: applicationUser?.phoneNumber,
          });
        }
      },
    }
  );
}

interface ICheckVerificationCodeParams {
  userId?: string;
  phoneOrEmail: string;
  codeToVerify: string;
}
