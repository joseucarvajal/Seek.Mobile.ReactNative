import React from "react";
import { ViewProps, StyleSheet } from "react-native";
import { Colors, FontNames } from "../../../constants";
import Text from "../text/text.comp";

export interface ILinkButtonProps extends ViewProps {
  upper?: boolean;
  underline?: boolean;
  onPress?: any;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  upper,
  underline,
  onPress
}) => {

  let linkStyle = styles.normalLinkStyle;

  if (upper) {
    linkStyle = styles.upperCaseLinkStyle;
    return <Text onPress={onPress} style={{ color: Colors.primaryFontLight }} />
  }

  let realUnderline = !upper && underline;

  return <Text underline={realUnderline} onPress={onPress} style={{ color: Colors.primaryFontLight }} />
};

export default LinkButton;

const styles = StyleSheet.create({
  normalLinkStyle: {
    fontFamily: FontNames.CamptonBold,
    color: Colors.primaryFont,
    fontSize: 17
  },
  upperCaseLinkStyle: {
    fontFamily: FontNames.CamptonLight,
    color: Colors.primaryFontLight,
    fontSize: 22
  }
});

