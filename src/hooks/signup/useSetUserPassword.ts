import axios from "axios";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { ApiEndPoints } from "../../constants";
import { useIdentityState } from "../../providers/identity";
import { IErrorResponse } from "../../shared";

const setUserPasswordRequest = async (requestData: IUseSetUserPasswordRequestParams) => {
  const url = `http://192.168.0.102:32700/api/v1/Profile/${ApiEndPoints.signUp.setUserPassword}`;
  //const url = `https://run.mocky.io/v3/4d13c141-982d-427d-8627-e3cdfc74530d/`;
  const { data } = await axios.post(url, requestData);
  return data;
};

export function useSetUserPassword() {
  const navigation = useNavigation();
  const { applicationUser } = useIdentityState();
  const [mutate, { isLoading, error }] = useMutation<
    {},
    IErrorResponse,
    IUseSetUserPasswordRequestParams
  >(setUserPasswordRequest, {
    onSuccess: () => {
      console.log("Password added successfully");
    },
  });

  const setUserPassword = async (password: string, passwordConfirm: string) => {    
    return mutate({
      userId: applicationUser?.id,
      password,
      passwordConfirm,
    });
  };

  return { setUserPassword, isLoading, error };
}

interface IUseSetUserPasswordRequestParams {
  userId?: string;
  password: string;
  passwordConfirm: string;
}