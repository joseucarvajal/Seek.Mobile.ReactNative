import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";
import { useIdentityState } from "../../providers/identity";

const getUserProfile = async (
  _: any,
  userId: string
) => {
  if (userId) {
    //const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.profile.getProfile}/${userId}`;
    const url = `${ApiEndPoints.profile.getProfile}`;
    const { data } = await axios.get(url);
    return data;
  }
};

export function useGetUserProfile() {
  const { applicationUser } = useIdentityState();
  return useQuery<IMyProfile, IErrorResponse>(["/profile/", applicationUser?.id], getUserProfile);
}

export interface IMyProfile {
  id: string
  profileImage: string;
  rollImages: string[];
  nickName: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthdate: string;
  age: string;
  gender: string;
  emailAddress: string;
  languageKnow: string[];
  school: string;
  jobIndustry: string;
  about: string;
  innerThoughts: string[];
  publicInterest: string[];
  matchingInterest: string;
  miles: string;
  city: string;
  country: string;
}