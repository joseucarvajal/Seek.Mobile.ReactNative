import React from 'react';
import { Images } from '../../../constants'
import { Image } from '../../../shared'

export interface ISeekQLogoProps {
    
}

const SeekQLogo: React.FC<ISeekQLogoProps> = ({ }) => {
    return (
      <Image width={34} source={Images.Logo} size='logo' resizeMode='contain'/>
    );
}

export default SeekQLogo;