import React from "react";
import { Text, TextStyle } from "react-native";
import { Colors } from "../../../constants";
import FontNames from "../../../constants/Fonts";

export interface ITextProp {
  style?: TextStyle;
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
  lineHeight?: number;
  fontSize?: any;
  color?: any;
  bold?: any;
  italic?: any;
  center?: any;
  underline?: any;
  children?: any;
  styles?: any;
  theme?: any;
  fontFamily?: string;
  letterSpacing?: number;
  extraSmall?: boolean;
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
    lineHeight,
    color,
    bold,
    italic,
    center,
    underline,
    children,
    fontFamily,
    letterSpacing,
    extraSmall,
  },
  props
) => {
  return (
    <Text
      style={[ //Default font, do not change it, this is the most common one
        {
          fontFamily: FontNames.CamptonLight,
          color: Colors.fontNormal,
          fontSize: 16,
          lineHeight: 18
        },
        h1 && { fontSize: 28 },
        h2 && { fontSize: 24 },
        h3 && { fontSize: 16 },
        h4 && { fontSize: 12 },
        h5 && { fontSize: 21 },
        h6 && { fontSize: 28 },
        p && { fontSize: 16 },
        body && { fontSize: 14 },
        small && { fontSize: 14 },
        extraSmall && { fontSize: 12 },
        muted && { color: Colors.muted },
        neutral && { color: Colors.neutral },
        size && { fontSize: size },
        lineHeight && { lineHeight: lineHeight },
        color && { color },
        italic && { fontStyle: "italic" },
        bold && { fontFamily: FontNames.CamptonBold },
        fontFamily && { fontFamily },
        letterSpacing && { letterSpacing },
        center && { textAlign: "center" },
        underline && { textDecorationLine: "underline" },
        style && style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
