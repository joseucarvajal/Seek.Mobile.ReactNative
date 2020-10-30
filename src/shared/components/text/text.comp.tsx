import React from "react";
import { Text } from "react-native";
import { Colors } from "../../../constants";
import FontNames from "../../../constants/Fonts";

export interface ITextProp {
  style?: any;
  h1?: any;
  h2?: any;
  h3?: any;
  h4?: any;
  h5?: any;
  h6?: any;
  p?: any;
  body?: any;
  small?: any;
  muted?: any;
  neutral?: any;
  fontSize?: any;
  color?: any;
  bold?: boolean;
  medium?: boolean;
  italic?: boolean;
  center?: any;
  underline?: boolean;
  children?: any;
  styles?: any;
  theme?: any;
  fontFamily?: string;
  letterSpacing?: number;
  extraSmall?: boolean;
  extraLarge?: boolean;
  boldItalic?: boolean;
  SemiBold?: boolean;
  numberOfLines?: any;
  fontWeight?: any;
  uppercase?: boolean;
  capitalize?: boolean;
  lowercase?: boolean;
  onPress?: any;
  light?:any
}

const Typography: React.FC<ITextProp> = (
  {
    style,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    body,
    small,
    muted,
    neutral,
    fontSize: size,
    color,
    bold,
    medium,
    italic,
    center,
    underline,
    children,
    fontFamily,
    letterSpacing,
    extraSmall,
    extraLarge,
    boldItalic,
    SemiBold,
    numberOfLines,
    fontWeight = 'normal',
    uppercase,
    capitalize,
    lowercase,
    onPress,
    light
  },
  props
) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: FontNames.CamptonLight,
          color: Colors.fontNormal,
          fontSize: 16,
          fontWeight: fontWeight
        },
        h1 && { fontSize: 28, fontFamily: FontNames.CamptonMedium },
        h2 && { fontSize: 24 },
        h3 && { fontSize: 20 },
        h4 && { fontSize: 17 },
        h5 && { fontSize: 16 },
        h6 && { fontSize: 14 },
        p && { fontSize: 16 },        
        body && { fontSize: 14 },
        small && { fontSize: 14 },
        extraSmall && { fontSize: 12 },
        extraLarge && { fontSize: 32 },
        muted && { color: Colors.muted },
        neutral && { color: Colors.neutral },
        size && { fontSize: size },
        color && { color },
        italic && { fontFamily: FontNames.CamptonLightItalic },
        bold && { fontFamily: FontNames.CamptonBold },
        medium && { fontFamily: FontNames.CamptonMedium },
        SemiBold && { fontFamily: FontNames.CamptonSemiBold },
        boldItalic && { fontFamily: FontNames.CamptonBoldItalic },
        fontFamily && { fontFamily },
        letterSpacing && { letterSpacing },
        center && { textAlign: "center" },
        underline && { textDecorationLine: "underline" },
        uppercase && { textTransform: "uppercase" },
        capitalize && { textTransform: "capitalize" },
        lowercase && { textTransform: "lowercase" },
        style && style,
        light && { fontFamily: FontNames.CamptonLight },
      ]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;