import axios from "axios";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse, IApplicationUser } from "../../shared";
import { useIdentityState } from "../../providers/identity";
import { ApiEndPoints } from "../../constants";

const verifyCodeRequestFn = async (
  requestData: ICheckVerificationCodeRequestParams
) => {
  const url = `http://192.168.0.100:32700/api/v1/${ApiEndPoints.signUp.checkVerificationCode}`;
  //const url = `https://run.mocky.io/v3/4d13c141-982d-427d-8627-e3cdfc74530d/`;
  const { data } = await axios.post(url, requestData);
  return data;
};

export function useCheckVerificationCode() {
  const navigation = useNavigation();
  const { applicationUser } = useIdentityState();

  const [mutate, { isLoading, error, data }] = useMutation<
    IApplicationUser,
    IErrorResponse,
    ICheckVerificationCodeRequestParams
  >(verifyCodeRequestFn, {
    onSuccess: (responseData: IApplicationUser) => {
      if (
        responseData.emailConfirmed ||
        responseData.phoneNumberConfirmed
      ) {
        navigation.navigate("SignUpCreatePassword", {
          phoneNumberOrEmail: applicationUser?.phoneNumber,
        });
      }
    },
  });

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
