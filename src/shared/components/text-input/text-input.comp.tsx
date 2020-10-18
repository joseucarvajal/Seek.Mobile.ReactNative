import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import { Colors, Layout } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface IInputProps extends ViewProps {
  textInputStyle?: any;
  type?: any;
  placeholderTextColor?: any;
  placeholder?: any;
  label?: any;
  labelStyles?: any;
  color: ColorType;
  help?: any;
  helpStyles?: any;
  bgColor?: any;
  borderless?: any;
  viewPass?: any;
  rounded?: any;
  icon?: any;
  family?: any;
  left?: any;
  right?: any;
  iconColor?: any;
  topHelp?: any;
  bottomHelp?: any;
  theme?: any;
  styles?: any;
  iconSize?: any;
  iconContent?: any;
  password?: any;
  onRef?: any;
  error?: any;
  props?: any;
}

export type ColorType = "primary" | "secondary" | "tertiary" | "quaternary";

const Input: React.FC<IInputProps> = ({
  style,
  textInputStyle,
  type,
  placeholderTextColor,
  placeholder,
  label,
  labelStyles,
  color,
  help,
  helpStyles,
  bgColor,
  borderless,
  viewPass,
  rounded,
  icon,
  family,
  left,
  right,
  iconColor,
  topHelp,
  bottomHelp,
  iconSize,
  iconContent,
  password,
  onRef,
  error,
  ...props
}) => {

  const [isPassword, setIsPassword] = React.useState(false);
  React.useEffect(() => {
    setIsPassword(password);
  }, []);

  const inputViewStyles = [
    styles.inputStyle,
    styles.inputContainer,
    bgColor && { backgroundColor: bgColor },
    rounded && styles.rounded,
    borderless && [{ borderColor: Colors[color]}, styles.borderless],
    error && { borderColor: Colors.danger},
    style,
  ];

  const inputStyles = [
    styles.inputView,
    borderless && icon && styles.inputIcon,
    styles.inputText,
    color && { color: Colors[color] },
    textInputStyle || {}
  ];

  const iconInstance = icon ? (
    <Icon
      name={icon}
      size={iconSize || Layout.base * 1.0625}
      style={{ marginRight: left && !right ? 2 : 0 }}
      color={(error && Colors.danger) || iconColor || placeholderTextColor || Colors.placeholder}
    />
  ) : (
    iconContent
  );

  const viewPassElement = password && viewPass && (
    <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => setIsPassword(!isPassword)}>
      <Icon
        size={iconSize || Layout.base * 1.0625}
        color={iconColor || Colors.muted}
        name="eye"
      />
    </TouchableOpacity>
  );
  const labelContent = label && <Text style={[styles.label, labelStyles || {}]}>{label}</Text>;
  const helpContent = help && <Text style={[styles.helpText, helpStyles || {}]}>{help}</Text>;

  return (
    <View
      style={{
        marginVertical: Layout.base / 2,
        alignContent: 'center',
      }}>
      {labelContent}
      {topHelp && !bottomHelp && helpContent}
      <View style={inputViewStyles}>
        {left && !right && iconInstance}
        <TextInput
          ref={onRef}
          style={inputStyles}
          keyboardType={type}
          secureTextEntry={isPassword}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          {...props}
        />
        {right && iconInstance}
        {viewPassElement}
      </View>
      {bottomHelp && helpContent}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
    inputStyle: {
      backgroundColor: Colors.white,
      borderRadius: Layout.input_radius,
      borderWidth: Layout.input_border_width,
      height: Layout.input_height,
      width: Layout.window.width - Layout.base*2,
    },
    inputText: {
      color: Colors.black,
      fontSize: Layout.input_text_size,
      textDecorationColor: 'transparent',
      textShadowColor: 'transparent',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
      flex: 1,
    },
    inputIcon: {
      marginHorizontal: Layout.base,
    },
    label: {
      fontWeight: '500',
      fontSize: Layout.input_label_text_size,
      marginVertical: Layout.input_vertical_label,
      paddingHorizontal: Layout.base
    },
    helpText: {
      color: Colors.secondary,
      fontSize: Layout.input_help_text,
      marginVertical: 8,
      paddingHorizontal: 16
    },
    rounded: {
      borderRadius: Layout.input_rounded,
    },
    borderless: {
      borderWidth: 0,
      borderBottomWidth: Layout.input_border_width,
    },
});