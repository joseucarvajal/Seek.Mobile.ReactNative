import React from 'react';
import { ImageBackground, StyleSheet } from "react-native";
import Block from '../block/block.comp'

export interface ISpinnerProps {
  image?: any
  children?: any
}

const Background: React.FC<ISpinnerProps> = ({
  image,
  children
}) => {
  return (
    <Block flex>
      <ImageBackground source={image} style={styles.image}>
        {children}
      </ImageBackground>
    </Block>
  );
}

export default Background;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});