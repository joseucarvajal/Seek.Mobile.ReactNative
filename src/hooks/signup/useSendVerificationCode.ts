import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse, IApplicationUser } from "../../shared";
import { useIdentityActions } from "../../providers/identity";
import { ApiEndPoints } from "../../constants";

const sendVerificationCodeFn = async (
  _: any,
  phoneNumberOrEmail: string
) => {
  const url = `http://192.168.0.102:32700/api/v1/${ApiEndPoints.signUp.sendVerificationCode}/${phoneNumberOrEmail}`;
  //const url = `https://run.mocky.io/v3/4d13c141-982d-427d-8627-e3cdfc74530d/${phoneNumberOrEmail}`;
  const { data } = await axios.post(url);
  return data;
};

export default function useSendVerificationCode(
  phoneNumberOrEmail: string
) {
  
  const { setUser } = useIdentityActions();

  const navigation = useNavigation();  

  return useQuery<IApplicationUser, IErrorResponse>(
    [ApiEndPoints.signUp.sendVerificationCode, phoneNumberOrEmail],
    sendVerificationCodeFn,
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off, manual refetch is needed
      cacheTime: 0,
      retry: 1,
      onSuccess: (responseData: IApplicationUser) => {
        setUser(responseData);
        navigation.navigate("SignUpVerificationCode", {
          phoneNumberOrEmail: phoneNumberOrEmail,
        });
      }
    }
  );
}
