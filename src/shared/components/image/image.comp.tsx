import React from "react";
import { View, Text } from "react-native";
import { deviceHeight, deviceWidth } from "../../../constants";

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

  const realHeight = (height*deviceHeight)/100;
  const realWidth = (width*deviceWidth)/100;
  return <View style={{ width: realWidth, borderWidth: 2, borderColor: 'red' }}>{children}</View>;
};

export default Image;
