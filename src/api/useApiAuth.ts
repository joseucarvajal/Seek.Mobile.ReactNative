import axios from "axios";
import {
  API_GATEWAY_BFF_MOBILE
} from "./constants";

export default function useApiAuth() {
  const apiAuth = axios.create({
    baseURL: API_GATEWAY_BFF_MOBILE, //Gateway
  });

  return apiAuth;
}
