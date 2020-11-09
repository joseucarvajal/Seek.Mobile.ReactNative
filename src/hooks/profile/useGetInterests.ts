import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const getInterests = async (
  _: any,
) => {
  //const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.profile.getInterests}`;
  const url = `${ApiEndPoints.interest.getInterests}`;
  const { data } = await axios.get(url)
  return data;
};

export function useGetInterests() {
  return useQuery<IInterest[], IErrorResponse>(["/interests"], getInterests);
}

export interface IInterest {
  id: string;
  interest: string;
}