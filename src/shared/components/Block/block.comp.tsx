import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Layout } from '../../../constants';

export interface IBlockProps {
    row?: any;
    flex?: any;
    center?: any;
    middle?: any;
    top?: any;
    bottom?: any;
    right?: any;
    left?: any;
    shadow?: any;
    space?: any;
    fluid?: any;
    height?: any;
    shadowColor?: any;
    card?: any;
    width?: any;
    safe?: any;
    children?: any;
    style?: any;
    styles?: any;
    props?: any;
}

const Block: React.FC<IBlockProps> = ({
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,
    shadow,
    space,
    fluid,
    height,
    shadowColor,
    card,
    width,
    safe,
    children,
    style,
    ...props
}) => {

    const styleBlock = [
        styles.block,
        row && styles.row,
        flex && { flex: flex === true ? 1 : flex },
        center && styles.center,
        middle && styles.middle,
        top && styles.top,
        bottom && styles.bottom,
        right && styles.right,
        left && styles.left,
        space && { justifyContent: `space-${space}` },
        shadow && styles.shadow,
        fluid && styles.fluid,
        card && styles.card,
        height && { height },
        width && { width },
        shadowColor && { shadowColor },
        style,
    ];

    if (safe) {
        return (
            <SafeAreaView style={styleBlock} {...props}>
                {children}
            </SafeAreaView>
        );
    }

    return (
        <View style={styleBlock} {...props}>
            {children}
        </View>
    );
}

export default Block;

const styles = StyleSheet.create({
    block: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    left: {
        alignItems: 'flex-start',
    },
    right: {
        alignItems: 'flex-end',
    },
    top: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    bottom: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    card: {
        borderRadius: Layout.card_border_radius,
        borderWidth: Layout.card_border_width,
        borderColor: Colors.block,
    },
    shadow: {
        shadowColor: Colors.block,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: Layout.block_shadow_opacity,
        shadowRadius: Layout.block_shadow_opacity,
        elevation: Layout.android_elevation,
    },
    fluid: {
        width: 'auto',
    },
});