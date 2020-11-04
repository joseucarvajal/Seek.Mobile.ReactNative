import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";

const getBlockedPeople = async (
  _: any,
  userId: string
) => {
  if(userId) {
    // const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.settings.blockedPeopleByUser}/${userId}`;
    const url = 'https://run.mocky.io/v3/57792cbe-37b4-4034-93a0-3e8aa5374ec9';
    const { data } = await axios.get(url);
    return data;
  }
};

export function useGetBlockedPeople() {
  const { applicationUser } = useIdentityState();
  return useQuery<IGetBlockedPeople[], IErrorResponse>(
    ["/blocked/user/", applicationUser?.id],
    getBlockedPeople
  );
}

export interface IGetBlockedPeople {
  avatar: string;        
  fullName: string;
  age: number;
  userId: string;
}
