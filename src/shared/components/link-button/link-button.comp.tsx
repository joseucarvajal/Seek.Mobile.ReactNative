import React from "react";
import { ViewProps, StyleSheet } from "react-native";
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

  let fontFamily = FontNames.CamptonBold;
  if(upper){
    fontFamily = FontNames.CamptonLight;
  }

  let color = Colors.primaryFont;
  if(upper){
    color = Colors.primaryFontLight;
  }

  let realUnderline = !upper && underline;

  return (
    <Button
      type="link"
      onPress={onPress}
    >
      <Text 
        style={{
          color: color,
          fontFamily: fontFamily
        }}
        underline = {realUnderline}
        lineHeight={22}
      >
        {children}
      </Text>
    </Button>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  linkButtonPrimary: {    
    color: Colors.primaryFont,
    fontFamily: FontNames.CamptonBold,
    fontSize: 17
  }  
});

