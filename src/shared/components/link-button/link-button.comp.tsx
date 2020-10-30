import React from "react";
import { ViewProps } from "react-native";
import { Colors, FontNames } from "../../../constants";
import Text from "../text/text.comp";

export interface ILinkButtonProps extends ViewProps {
  upper?: boolean;
  underline?: boolean;
  onPress?: any;
  children?: any;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  upper,
  underline,
  onPress,
  children,
}) => {
  if (!upper) {
    return (
      <Text
        fontSize={17}
        fontFamily={FontNames.CamptonBold}
        underline={underline}
        onPress={onPress}
        style={{ color: Colors.primaryFont }}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      uppercase={upper}
      underline={underline}
      onPress={onPress}
      style={{ color: Colors.primaryFontLight }}
    >
      {children}
    </Text>
  );
};

export default LinkButton;
