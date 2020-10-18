import React from 'react';
import { StyleSheet, View, TouchableOpacity, ViewProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Layout, Colors } from '../../../constants';

export interface IArButtonProps extends  ViewProps {
    type?: ButtonType;
    color?: ColorType;
    icon?: any;
    shadow?: any;
    disabled?: any;
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
}

export type ButtonType = "chip" | "social" | "large" | "link" | "gradient";
export type ColorType = "primary" | "secondary" | "tertiary" | "quaternary";

const ArButton: React.FC<IArButtonProps> = ({
    type,
    color,
    shadow,
    disabled,
    children,
    onPress,
    style,
    ...props
}) => {

    const styleButton = [
        styles.button,
        style,
        type === 'chip' && styles.smallButton,
        type === 'large' && styles.largeButton,
        type === 'social' && styles.socialButton,
        type === 'gradient' && styles.largeButton,
        disabled && styles.disabled,
        shadow && styles.shadow,
        color && { backgroundColor: Colors[color]}
    ];
    
    return (
        <>
            {
                type === 'gradient' ?
                <View style={{ borderRadius: Layout.button_radius }}>
                    <LinearGradient
                        colors={disabled ? [Colors.muted, Colors.default] : [Colors.primary, Colors.secondary]}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={styleButton}
                        >
                        <TouchableOpacity 
                            onPress={ disabled ? null: onPress} 
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            {children}
                        </TouchableOpacity> 
                    </LinearGradient>
                </View>
                :
                <View style={styleButton}>
                    <TouchableOpacity 
                        onPress={ disabled ? null: onPress} 
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>                        
                        {children}
                    </TouchableOpacity>
                </View>
            }
        </>
    );
}

export default ArButton;

const styles = StyleSheet.create({
    button: {
        width: Layout.window.width - Layout.base*2,
        backgroundColor: Colors.default,
        height: 40
    },
    smallButton: {
      width: 100,
      backgroundColor: Colors.active,
      height: 32,
      borderRadius: Layout.chips_radius
    },
    largeButton: {
      width: Layout.window.width - Layout.base*2,
      backgroundColor: Colors.primary,
      height: 50,
      borderRadius: Layout.button_radius
    },
    socialButton: {
      width: Layout.window.width - Layout.base*2,
      backgroundColor: Colors.active,
      height: 48,
      borderRadius: Layout.socialbutton_radius
    },
    shadow: {        
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      elevation: 3
    },
    disabled: {
        backgroundColor: Colors.muted
    }
  });