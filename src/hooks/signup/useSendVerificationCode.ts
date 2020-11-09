import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse, IApplicationUser } from "../../shared";
import { useIdentityActions } from "../../providers/identity";
import { ApiEndPoints } from "../../constants";
import { useApiAnonymous } from "../../api";

export default function useSendVerificationCode(phoneNumberOrEmail: string) {

  const api = useApiAnonymous();
  const { setUser } = useIdentityActions();
  const navigation = useNavigation();

  const doRequestFn = async (_: any, phoneNumberOrEmail: string): Promise<IApplicationUser> => {
    const { data } = await api.post(
      `${ApiEndPoints.identity.sendVerificationCode}/${phoneNumberOrEmail}`
    );
    return data;
  }

  return useQuery<IApplicationUser, IErrorResponse>(
    [ApiEndPoints.identity.sendVerificationCode, phoneNumberOrEmail],
    doRequestFn,
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
      },
    }
  );
}
