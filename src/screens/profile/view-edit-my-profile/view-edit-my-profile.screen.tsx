import React from "react";
import { MenuEditProfile } from "../../../constants";
import { Block, Image, Menu } from '../../../shared';

export interface IEditMyProfileProps { 
  
}

const EditMyProfile: React.FC<IEditMyProfileProps> = ({ 

}) => {
  return (
    <Block flex center>
      <Image source={{ uri: 'https://loremflickr.com/375/466/girl' }} size='full' resizeMode='stretch' />
      <Menu items={MenuEditProfile} />
    </Block>
  );
}

export default EditMyProfile;