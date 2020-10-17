import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Layout, Colors } from '../../../constants'

export interface IArButtonProps {
    small?: any;
    large?: any;
    social?: any;
    gradient?: any;
    shadow?: any;
    disabled?: any;
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
}

const ArButton: React.FC<IArButtonProps> = ({
    small,
    large,
    social,
    gradient,
    shadow,
    disabled,
    children,
    onPress,
    ...props
}) => {

    const styleButton = [
        styles.button,
        small && styles.smallButton,
        large && styles.largeButton,
        gradient && styles.largeButton,
        social && styles.socialButton,
        disabled && styles.disabled,
        shadow && styles.shadow
    ];
    
    return (
        <>
            {
                gradient ?
                <View style={{ borderRadius: Layout.button_radius }}>
                    <LinearGradient
                        colors={[Colors.primary, Colors.secondary]}
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