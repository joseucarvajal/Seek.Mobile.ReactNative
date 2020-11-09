import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints, API_URL_SETTINGS_DEV } from '../../constants/ApiEndpoints';
import { IErrorResponse } from "../../shared";

const getUserProfiles = async (
  _: any
) => {
  //const url = `${API_URL_SETTINGS_DEV}${ApiEndPoints.profile.getAllProfiles}`;
  const url = `${ApiEndPoints.profile.getAllProfiles}`;
  const { data } = await axios.get(url);
  return data;
};

export function useGetAllProfiles() {
  return useQuery<IUserProfile[], IErrorResponse>(["/profiles"], getUserProfiles);
}

export interface IUserProfile {
  id: string
  profileImage: string;
  rollImages: string[];
  nickName: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  languageKnow: string[];
  school: string;
  jobIndustry: string;
  about: string
  innerThoughts: string[];
  publicInterest: string[];
  privateInterest: string[];
  miles: string;
  city: string;
}