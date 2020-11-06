import React from "react";
import { Block, DisplayError, MenuSwipeable, Spinner } from "../../../shared";
import {	
  IGetBlockedPeople,
  useGetBlockedPeople,
  useUnlockUser,
  useBlockUser
} from '../../../hooks/settings';	
import { Colors } from "../../../constants";
export interface IAccountInformationMenuProps { }

const BlockedPeople: React.FC<IAccountInformationMenuProps> = () => {
  const {	
    error,	
    data,	
    isLoading	
  } = useGetBlockedPeople();

  const { setUnlockUser } = useUnlockUser();

  console.log(error, data, isLoading);

  const mappingData = () => {	
    return data?.map(( blockedUser: IGetBlockedPeople, index: number ) => ({	
      id: blockedUser.userId, 	
      title: `${blockedUser.fullName}, ${blockedUser.age}`, 	
      type: 'swipeable', 	
      color: Colors.white, 	
      avatar: blockedUser.avatar,	
      action: (active: boolean) => {	
        setUnlockUser(blockedUser.userId);
      },	
    }));	
  };

  return (
    <Block flex center>
      <Spinner visible={isLoading} />	
      <DisplayError errorResponse={error} />	
      <MenuSwipeable items={mappingData()}/>	
    </Block>
  );
};

export default BlockedPeople;
