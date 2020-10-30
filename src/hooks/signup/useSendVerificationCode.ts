import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse } from "../../shared";

const sendVerificationCode = async (
  _: any,
  phoneNumberOrEmail: string
) => {
  //const url = `http://192.168.0.101:32700/api/v1/verificationcode/send/${phoneNumberOrEmail}`;
  const url = `https://run.mocky.io/v3/4d13c141-982d-427d-8627-e3cdfc74530d/${phoneNumberOrEmail}`;
  console.log({url});
  const { data } = await axios.get(url);
  return data;
};

export default function useSendVerificationCode(
  phoneNumberOrEmail: string
) {
  const navigation = useNavigation();

  return useQuery<{}, IErrorResponse>(
    ["/verificationcode/send/", phoneNumberOrEmail],
    sendVerificationCode,
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off, manual refetch is needed
      cacheTime: 0,
      retry: 1,
      onSuccess: (responseData: any) => {
        navigation.navigate("SignUpVerificationCode", {
          phoneNumberOrEmail: phoneNumberOrEmail,
        });
      },
    }
  );
}
