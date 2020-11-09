import React, { useRef } from "react";
import { Text, Block, DisplayError, MenuSwipeable, Spinner } from "../../../shared";
import {	
  IGetBlockedPeople,
  useGetBlockedPeople,
  useUnlockUser
} from '../../../hooks/settings';	
import { Colors } from "../../../constants";
import { useToast } from "../../../hooks/toast/useToast";
import { ToastType } from "../../../shared/components/toast-provider/toast-provider";
export interface IAccountInformationMenuProps { }

const BlockedPeople: React.FC<IAccountInformationMenuProps> = () => {
  const { showToast } = useToast();
  const ref = useRef();
  const {	
    error,	
    data,	
    isLoading	
  } = useGetBlockedPeople();

  const { setUnlockUser, data: unblocked } = useUnlockUser();

  console.log(error, data, isLoading);

  const mappingData = () => {	
    return data?.map(( blockedUser: IGetBlockedPeople, index: number ) => ({	
      id: blockedUser.idConnection, 	
      title: `${blockedUser.fullName}, ${blockedUser.age}`, 	
      type: 'swipeable', 	
      color: Colors.white, 	
      avatar: blockedUser.avatar,	
      action: (active: boolean) => {	
        setUnlockUser(blockedUser.idConnection);
      },	
    }));	
  };

  
  React.useEffect(() => {
    if (unblocked) {
      showToast(ToastType.Base, 'User unblocked')
      return;
    }
    console.log('data 2', unblocked);
    
  }, [unblocked]);

  return (
    <Block flex center>
      <Spinner visible={isLoading} />	
      <DisplayError errorResponse={error} />	
      <MenuSwipeable items={mappingData()}/>	
    </Block>
  );
};

export default BlockedPeople;
