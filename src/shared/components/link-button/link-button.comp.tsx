import React from "react";
import { ViewProps, StyleSheet } from "react-native";
import { Colors, FontNames } from "../../../constants";
import Button from "../button/button.comp";
import Text from "../text/text.comp";

export interface ILinkButtonProps extends ViewProps {
  small?: any;
  onPress?: any;
  iconSize?: number;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  onPress,
  style,
  iconSize,
  children,
  ...props
}) => {
  return (
    <Button
      type="link"
      onPress={onPress}
    >
      <Text underline style={styles.linkButtonPrimary} lineHeight={22}>
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

