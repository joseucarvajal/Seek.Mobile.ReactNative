import React from 'react';

import { Image } from "react-native";
import signupStyles from '../signup.styles';
import { View } from '../../Themed';

import SeekQLogoSvg from '../../../../assets/images/SeekQ_logo-1.svg';

export interface ISeekQLogoProps {
    
}

const SeekQLogo: React.FC<ISeekQLogoProps> = ({ }) => {
    return ( 
      <View style={signupStyles.logoImage}>
        <SeekQLogoSvg/>
      </View>  
    );
      {/* 
        <Image
          style={signupStyles.logoImage}
          source={require("../../../../assets/images/seekqlogot.png")}          
        />
      */} 

}

export default SeekQLogo;