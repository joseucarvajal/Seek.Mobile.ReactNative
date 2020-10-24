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
      style={[
        {
          fontFamily: FontNames.CamptonLight,
          color: Colors.fontNormal,
          fontSize: 16,
        },
        h1 && { fontSize: 28 },
        h2 && { fontSize: 24 },
        h3 && { fontSize: 20 },
        h4 && { fontSize: 16 },
        h5 && { fontSize: 14 },
        h6 && { fontSize: 12 },
        p && { 
          fontFamily: FontNames.CamptonLight,
          color: Colors.fontNormal,
          fontSize: 16,
        },
        body && { fontSize: 14 },
        small && { fontSize: 14 },
        extraSmall && { fontSize: 12 },
        muted && { color: Colors.muted },
        neutral && { color: Colors.neutral },
        size && { fontSize: size },
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