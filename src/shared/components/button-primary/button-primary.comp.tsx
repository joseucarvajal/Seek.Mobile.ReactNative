import React from "react";
import { ViewProps } from "react-native";
import { Colors } from "../../../constants";
import Button from "../button/button.comp";
import Text from "../text/text.comp";

export interface IButtonPrimaryProps extends ViewProps {
  icon?: any;
  onPress?: any;
  iconSize?: number;
}

const ButtonPrimary: React.FC<IButtonPrimaryProps> = ({
  icon,
  onPress,
  style,
  children,
  iconSize,
  ...props
}) => {
  return (
    <Button      
      type="gradient"
      style={style}
      onPress={onPress}
    >
      <Text fontSize={20} lineHeight={22} color={Colors.white} center>
        {children}
      </Text>
    </Button>
  );
};

export default ButtonPrimary;
