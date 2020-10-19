import React from "react";
import { View, Text } from "react-native";
import {deviceHeight, deviceWidth} from '../../../constants';

export interface IImageProps {
  height: number;
  width: number;
}

const Image: React.FC<IImageProps> = ({
  height, //in %
  width, //in %
  children,
}) => {
  if (height > 100) {
    return <Text>Image component, height should not be greater than 100</Text>;
  }

  if (width > 100) {
    return <Text>Image component, width should not be greater than 100</Text>;
  }

  return <View style={{ height }}><Text>{`Dimensions ${deviceHeight} - ${deviceWidth}`}</Text></View>;
};

export default Image;
