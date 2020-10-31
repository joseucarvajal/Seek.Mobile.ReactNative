import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse } from "../../shared";

const verifyCode = async (_: any, data: IUseConfirmPasswordCreateUserParams) => {
  //const url = `http://192.168.0.101:32700/api/v1/verificationcode/check`;
  const url = `https://run.mocky.io/v3/4d13c141-982d-427d-8627-e3cdfc74530d/`;
  const { responseData } = await axios.post(url, data);
  return responseData;
};

export function useConfirmPasswordCreateUser(data: IUseConfirmPasswordCreateUserParams) {
  const navigation = useNavigation();

  return useQuery<{}, IErrorResponse>(
    ["/create/", data],
    verifyCode,
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off, manual refetch is needed
      cacheTime: 0,
      onSuccess: (responseData: any) => {
        navigation.navigate("SignUpCreatePassword", {
          phoneNumberOrEmail: data.phoneOrEmail,
        });
      },
    }
  );
}

export interface IUseConfirmPasswordCreateUserParams {
  phoneOrEmail: string;
  password:string;
}
