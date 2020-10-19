import React from 'react';

import signupStyles from '../signup.styles';
import { View } from '../../Themed';

import { 
  Button,
  Image
} from "../../../shared";

import SeekQLogoSvg from '../../../../assets/images/SeekQ_logo-1.svg';

export interface ISeekQLogoProps {
    
}

const SeekQLogo: React.FC<ISeekQLogoProps> = ({ }) => {
    return ( 
      <Image height={13} width={65}>
        <SeekQLogoSvg/>
      </Image>
    );
}

export default SeekQLogo;