import React from "react";
import { ViewProps } from "react-native";
import { Colors } from "../../../constants";
import Button from "../button/button.comp";
import Text from "../text/text.comp";
import Icon from "../icons/icon.comp";
import { ColorType } from "../button/button.comp";

export interface IButtonTertiary extends ViewProps {
  icon: ColorType;
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
      family='seekQ'
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
      iconColor={Colors.white}
      iconSize={iconSize ?? 18}
      style={style}
      iconContent={iconContent}
      onPress={onPress}
      color={icon}
    >
      <Text h5 medium color={Colors.white}>
        {children}
      </Text>
    </Button>
  );
};

export default ButtonTertiary;