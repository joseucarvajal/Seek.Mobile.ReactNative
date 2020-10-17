import React, { MouseEvent } from 'react';
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Layout, Colors } from '../../../constants'

export interface IArButtonProps {
    small?: any;
    large?: any;
    disabled?: any;
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
}

const ArButton: React.FC<IArButtonProps> = ({
    small,
    large,
    disabled,
    children,
    onPress,
    ...props
}) => {

    const styleButton = [
        styles.button,
        small && styles.smallButton,
        large && styles.largeButton,
        disabled && styles.disabled
    ];
    
    return (
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
    );
}

export default ArButton;

const styles = StyleSheet.create({
    button: {
        width: Layout.window.width,
        height: 40
    },
    smallButton: {
      width: Layout.window.width * 0.50
    },
    largeButton: {
      width: Layout.window.width - Layout.base*2,
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