import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from "react-native";
import { Colors, Layout, FontNames } from '../../../constants';
import Icon from '../icons/icon.comp';
import Text from '../text/text.comp'

export interface IInputProps extends TextInputProps {
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
  onFocus?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  value?: any;
  children?: any;
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
  onFocus, 
  onChangeText, 
  onSubmitEditing, 
  value,
  children,
  ...props
}) => {

  const [isPassword, setIsPassword] = React.useState(password);
  React.useEffect(() => {
    setIsPassword(password);
  }, []);

  const inputViewStyles = [
    styles.inputStyle,
    styles.inputContainer,
    bgColor && { backgroundColor: bgColor },
    rounded && styles.rounded,
    borderless && [{ borderColor: Colors[color] }, styles.borderless],
    error && { borderColor: Colors.danger },
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
      family={family}
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
        family='FontAwesome'
        size={iconSize || Layout.base * 1.0625}
        color={iconColor || Colors.muted}
        name="eye"
      />
    </TouchableOpacity>
  );
  const labelContent = label && <Text h6 style={[styles.label, labelStyles || {}]}>{label}</Text>;
  const helpContent = help && <Text h6 style={[styles.helpText, helpStyles || {}]}>{help}</Text>;

  return (
    <View>
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
          onFocus={onFocus}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          value={value}
          {...props}
        />
        {right && iconInstance}
        {viewPassElement}
        {children}
      </View>
      {bottomHelp && helpContent}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: Colors.transparent,
    borderRadius: Layout.input_radius,
    borderWidth: Layout.input_border_width,
    height: Layout.input_height,
    width: Layout.window.width - Layout.base * 2    
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
    paddingVertical: Layout.input_vertical_label - 10,
    fontSize: Layout.input_label_text_size,
    fontFamily: FontNames.CamptonBook,
    color: Colors.fontSoft1
  },
  helpText: {
    color: Colors.secondary,
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