import React from "react";
import { Text } from "react-native";
import { Colors } from "../../../constants"

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
  size?: any;
  color?: any;
  bold?: any;
  italic?: any;
  center?: any;
  underline?: any;
  children?: any;
  styles?: any;
  theme?: any;
}

const Typography: React.FC<ITextProp> = ({ 
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
  size,
  color,
  bold,
  italic,
  center,
  underline,
  children,
}, props) => {
  return (
    <Text
      style={[
        h1 && { fontSize: 44 },
        h2 && { fontSize: 38 },
        h3 && { fontSize: 30 },
        h4 && { fontSize: 24 },
        h5 && { fontSize: 21 },
        h6 && { fontSize: 18 },
        p && { fontSize: 16 },
        body && { fontSize: 14 },
        small && { fontSize: 12 },
        muted && { color: Colors.muted },
        neutral && { color: Colors.neutral },
        size && { fontSize: size },
        color && { color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: 'bold' },
        center && { textAlign: 'center' },
        underline && { textDecorationLine: 'underline' },
        style && style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;