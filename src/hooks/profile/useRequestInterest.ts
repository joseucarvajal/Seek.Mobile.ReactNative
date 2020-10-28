import axios from "axios";
import { useQuery } from "react-query";
import { IErrorResponse } from "../../shared";

const getInterestList = async () => {
  const url = `https://run.mocky.io/v3/1c9d757f-34b2-48a0-9e2f-4bf6cee16537/`;    
  const { data } = await axios.get(url);
  return data;
};

export default function useRequestInterest() {
  return useQuery<{}, IErrorResponse>(["allInterest"], getInterestList, {
    refetchOnWindowFocus: false,
    enabled: false, 
    cacheTime: 0,
    retry: 1,
    onSuccess: (data: any) => {
      
    }
    
  });
}
