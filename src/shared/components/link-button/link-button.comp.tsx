import React from "react";
import { ViewProps, StyleSheet, TextStyle } from "react-native";
import { Colors, FontNames } from "../../../constants";
import Button from "../button/button.comp";
import Text from "../text/text.comp";

export interface ILinkButtonProps extends ViewProps {
  upper?: boolean;
  underline?: boolean;
  onPress?: any;
  iconSize?: number;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  upper,
  underline = true,
  onPress,
  style,
  iconSize,
  children,
  ...props
}) => {

  let linkStyle = styles.normalLinkStyle;  
  if(upper){
    linkStyle = styles.upperCaseLinkStyle;
  }

  let realUnderline = !upper && underline;

  return (
    <Button
      type="link"
      onPress={onPress}
    >
      <Text 
        style={linkStyle}
        underline = {realUnderline}
      >
        {children}
      </Text>
    </Button>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  normalLinkStyle: {
    fontFamily:FontNames.CamptonBold,
    color:Colors.primaryFont,
    fontSize: 17
  },
  upperCaseLinkStyle: {
    fontFamily:FontNames.CamptonLight,
    color:Colors.primaryFontLight,
    fontSize: 22
  }
});

