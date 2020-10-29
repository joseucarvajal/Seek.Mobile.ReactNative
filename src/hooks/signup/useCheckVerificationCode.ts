import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse } from "../../shared";

const verifyCode = async (_: any, data: ICheckVerificationCodeParams) => {
  const url = `http://192.168.0.101:32700/api/v1/verificationcode/check`;
  const { responseData } = await axios.post(url, data);
  return responseData;
};

export function useCheckVerificationCode(data: ICheckVerificationCodeParams) {
  const navigation = useNavigation();

  return useQuery<{}, IErrorResponse>(
    ["/verificationcode/check/", data],
    verifyCode,
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off, manual refetch is needed
      cacheTime: 0,
      onSuccess: (responseData: any) => {
        navigation.navigate("SignUpVerificationCode", {
          phoneNumberOrEmail: data.phoneOrEmail,
        });
      },
    }
  );
}

export interface ICheckVerificationCodeParams {
  phoneOrEmail: string;
  codeToVerify:string;
}
