import React from "react";
import { ViewProps } from "react-native";
import { Colors, FontNames } from "../../../constants";
import Button from "../button/button.comp";
import Text from "../text/text.comp";
import Icon from "../icons/icon.comp";

export interface IButtonTertiary extends ViewProps {
  icon?: any;
  customIcon?: string;
  customIconSize?: number;
  customIconColor?: string;
  customIconMargin?: string;
  onPress?: any;
  iconSize?: number;
}

const ButtonTertiary: React.FC<IButtonTertiary> = ({
  icon,
  onPress,
  style,
  children,
  iconSize,
  customIcon,
  customIconSize = 18,
  customIconColor = Colors.quaternary,
  customIconMargin = 30,
  ...props
}) => {
  const iconContent = customIcon && (
    <Icon
      name={customIcon}
      size={customIconSize}
      color={customIconColor}
      style={{ marginRight: customIconMargin }}
    />
  );

  return (
    <Button
      left
      type="social"
      icon={icon}
      iconColor={Colors.quaternary}
      iconSize={iconSize ?? 18}
      style={style}
      iconContent={iconContent}
      onPress={onPress}
    >
      <Text fontSize={16} fontFamily={FontNames.CamptonMedium}>
        {children}
      </Text>
    </Button>
  );
};

export default ButtonTertiary;
