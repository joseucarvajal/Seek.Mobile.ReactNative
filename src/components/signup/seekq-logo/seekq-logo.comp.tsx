import React from 'react';
import { Images } from '../../../constants'
import { Image } from '../../../shared'

export interface ISeekQLogoProps {
    
}

const SeekQLogo: React.FC<ISeekQLogoProps> = ({ }) => {
  const width = 45;
    return ( 
      <Image width={45} source={Images.Logo} size='logo' resizeMode='contain'/>
    );
}

export default SeekQLogo;