import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { IErrorResponse } from "../../shared";

const getPhoneVerificationCode = async (phoneNumberOrEmail: string) => {

    const url = `http://192.168.0.101:32700/api/v1/CodeVerification/send/${phoneNumberOrEmail}`;    
    //const url = `https://run.mocky.io/v3/1c9d757f-34b2-48a0-9e2f-4bf6cee16537/${phoneNumber}`;    

    console.log({url});

    const { data } = await axios.get(url);
    return data;
};

export default function useRequestVerificationPhoneCode(phoneNumberOrEmail: string) {  
  const navigation = useNavigation();

  return useQuery<{}, IErrorResponse> (["codeverification", "Validate", phoneNumberOrEmail], getPhoneVerificationCode, {
    refetchOnWindowFocus: false,
    enabled: false, // turned off by default, manual refetch is needed
    cacheTime: 0,
    retry: 1,
    onSuccess: (data: any) => {
      navigation.navigate("SignUpVerificationCode", {
        phoneNumberOrEmail: phoneNumberOrEmail,
      });
    }
  });
}
