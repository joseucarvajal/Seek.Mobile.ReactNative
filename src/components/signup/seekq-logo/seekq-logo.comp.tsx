import React from 'react';

import signupStyles from '../signup.styles';

import { View, Image } from "react-native";

import { 
  Button,
} from "../../../shared";

import SeekQLogoSvg from '../../../../assets/images/SeekQ_logo-1.svg';

export interface ISeekQLogoProps {
    
}

const SeekQLogo: React.FC<ISeekQLogoProps> = ({ }) => {
  const width = 45;
    return ( 
      <View style={{
        borderWidth: 2, 
        width:'100%', 
        flex: 0.1*(width/35), 
        justifyContent:'center',
        alignItems:'center'}}>
        <Image 
          style={{width:`${width}%`, height:'100%'}}
          source={require('../../../../assets/images/SeekQ_logo-1.png')}          
          resizeMode='contain'
        >
        </Image>
      </View>
    );
}

export default SeekQLogo;