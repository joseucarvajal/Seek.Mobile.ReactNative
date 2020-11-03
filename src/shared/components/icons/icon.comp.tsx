import React from "react";
import { ViewStyle } from "react-native";
import { createIconSetFromFontello } from 'react-native-vector-icons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import fontelloConfig from '../../../../assets/fonts/config.json';
const IconSeekQ = createIconSetFromFontello(fontelloConfig);

export interface IIconProps {
  name: any;
  family: FamilyType;
  size: number;
  color: string;
  style?: ViewStyle; 
}

export type FamilyType = "seekQ" | "FontAwesome";

const ArIcon: React.FC<IIconProps> = ({
  name,
  family,
  size,
  color= 'black',
  style,
}) => {
  return (
    <>
      {family === 'seekQ' ? 
        <IconSeekQ name={name} size={size} color={color} style={style} />
        :
        <FontAwesome name={name} size={size} color={color} style={style}/>
      }
    </>
  );
}

export default ArIcon;