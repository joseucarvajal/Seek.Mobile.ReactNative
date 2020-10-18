import React, { Children } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { Colors } from "../../../constants";
import { Text } from "../../../components/Themed";
import Fonts from "../../../constants/Fonts";

export type FontType = "Font16Line18" | "Font14Line16" | "TertiaryButton" | "Heading-1";

export interface ISTextProp {
  type: FontType;  
  style?: TextStyle; //Should use only (bold, italic...etc)
}

const SText: React.FC<ISTextProp> = ({ type, style }) => {
  const styleText = [
    { ...styles.text, ...style },
    type === "Font16Line18" && styles.font16Line18,
    type === "Font14Line16" && styles.font14Line16,
    type === "TertiaryButton" && styles.tertiaryButton,
    type === "Heading-1" && styles.heading1,
  ];

  return <Text style={styleText}>{Children}</Text>;
};

export default SText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.Campton,
    color: Colors.fontNormal,
  },
  font16Line18: {
    fontSize: 16,
    lineHeight: 18,
  },
  font14Line16: {
    fontSize: 14,
    lineHeight: 16,
  },
  tertiaryButton: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '500',
    fontStyle: 'normal'
  },
  heading1: {
    fontSize: 28,
    lineHeight: 22,
    fontWeight: '500',
    fontStyle: 'normal'
  },  
});
