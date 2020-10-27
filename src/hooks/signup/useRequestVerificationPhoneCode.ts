import axios from "axios";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";

const getPhoneVerificationCode = async (phoneNumber: string) => {
  try {
    const url = `http://192.168.0.101:32700/api/v1/user/requestverificationcode/${phoneNumber}`;    
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(JSON.stringify(err));
  }
};

export default function useRequestVerificationPhoneCode(phoneNumberOrEmail: string) {
  const navigation = useNavigation();

  return useQuery(phoneNumberOrEmail, getPhoneVerificationCode, {
    refetchOnWindowFocus: false,
    enabled: false, // turned off by default, manual refetch is needed
    cacheTime: 0,
    onSuccess: (data: any) => {
      navigation.navigate("SignUpVerificationCode", {
        phoneNumberOrEmail: phoneNumberOrEmail,
      });
    },
  });
}
