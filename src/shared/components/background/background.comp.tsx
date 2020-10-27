import React from 'react';
import { ImageBackground, StyleSheet } from "react-native";
import Layout from '../../../constants/Layout';
import Block from '../block/block.comp'

export interface ISpinnerProps {
  image?: any
  children?: any
  style?: any
}

const Background: React.FC<ISpinnerProps> = ({
  image,
  children,
  style
}) => {
  return (
    <Block style={{ width: Layout.window.width, height: Layout.window.height }}>
      <ImageBackground source={image} style={[styles.image, style]} resizeMode='stretch'>
        {children}
      </ImageBackground>
    </Block>
  );
}

export default Background;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});