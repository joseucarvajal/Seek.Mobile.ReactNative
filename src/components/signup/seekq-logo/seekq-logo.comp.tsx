import React from 'react';

import { Image } from "react-native";
import signupStyles from '../styles';

export interface ISeekQLogoProps {
    
}

const SeekQLogo: React.FC<ISeekQLogoProps> = ({ }) => {
    return (
        <Image
          style={signupStyles.logoImage}
          source={require("../../../../assets/images/seekqlogot.png")}
        />
    );
}

export default SeekQLogo;