import React from "react";
import { StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Layout, Colors } from "../../../constants";
import Block from "../block/block.comp";
import Icon from "../icons/icon.comp";

export interface IArButtonProps extends ViewProps {
  type?: ButtonType;
  color?: ColorType;
  iconContent?: any;
  icon?: any;
  iconColor?: any;
  iconSize?: any;
  left?: any;
  right?: any;
  shadow?: any;
  disabled?: any;
  children?: React.ReactNode;
  props?: any;
  onPress?: any;
}

export type ButtonType =
  | "chip"
  | "social"
  | "large"
  | "link"
  | "text-link"
  | "gradient"
  | "backgroundless";
export type ColorType = "primary" | "secondary" | "tertiary" | "quaternary";

const ArButton: React.FC<IArButtonProps> = ({
  type,
  color,
  iconContent,
  icon,
  iconColor,
  iconSize,
  left,
  right,
  shadow,
  disabled,
  children,
  onPress,
  style,
  ...props
}) => {
  const iconInstance = icon ? (
    <Icon
      family='FontAwesome'
      name={icon}
      size={iconSize || Layout.base * 1.0625}
      style={{ paddingLeft: left && Layout.base, paddingRight: right && Layout.base }}
      color={iconColor}
    />
  ) : (
      iconContent
    );

  const styleButton = [
    styles.button,
    type === "chip" && styles.smallButton,
    type === "large" && styles.largeButton,
    type === "social" && styles.socialButton,
    type === "gradient" && styles.largeButton,
    type === "backgroundless" && styles.backgroundless,
    type === "link" && styles.backgroundless,
    disabled && styles.disabled,
    shadow && styles.shadow,
    color && { backgroundColor: Colors[color] },
    style
  ];

  return (
    <>
      {type === "gradient" ? (
        <Block style={[{ borderRadius: Layout.button_radius }, shadow && styles.shadow]}>
          <LinearGradient
            colors={
              disabled
                ? [Colors.muted, Colors.default]
                : [Colors.primary, Colors.secondary]
            }
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styleButton}
          >
            <TouchableOpacity
              onPress={disabled ? null : onPress}
              style={{ flex: 1 }}
            >
              <Block flex row middle center>
                {left && !right && iconInstance}
                <Block flex middle center>
                  {children}
                </Block>
                {right && iconInstance}
              </Block>
            </TouchableOpacity>
          </LinearGradient>
        </Block>
      ) : type === "text-link" ? (
        <TouchableOpacity style={style}
          onPress={disabled ? null : onPress}
        >
          {children}
        </TouchableOpacity>
      ) : (
            <Block style={styleButton}>
              <TouchableOpacity
                onPress={disabled ? null : onPress}
                style={{ flex: 1 }}
              >
                <Block flex row middle center>
                  {left && !right && iconInstance}
                  <Block flex middle center >
                    {children}
                  </Block>
                  {right && iconInstance}
                </Block>
              </TouchableOpacity>
            </Block>
          )}
    </>
  );
};

export default ArButton;

const styles = StyleSheet.create({
  button: {
    width: Layout.window.width - Layout.base * 2,
    backgroundColor: Colors.default,
    height: 40,
  },
  smallButton: {
    width: 100,
    backgroundColor: Colors.active,
    height: 32,
    borderRadius: Layout.chips_radius,
  },
  largeButton: {
    width: Layout.window.width - Layout.base * 2,
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: Layout.button_radius,
  },
  socialButton: {
    width: Layout.window.width - Layout.base * 2,
    backgroundColor: Colors.tertiary,
    height: 48,
    borderRadius: Layout.socialbutton_radius,
  },
  backgroundless: {
    width: Layout.window.width - Layout.base * 2,
    backgroundColor: Colors.transparent,
    height: 50,
    borderRadius: Layout.button_radius,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  },
  disabled: {
    backgroundColor: Colors.muted,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
