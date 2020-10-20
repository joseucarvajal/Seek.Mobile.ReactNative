import React from 'react';
import { ViewProps } from 'react-native'
import { Colors } from '../../../constants';
import Button from '../button/button.comp';
import Typography from '../text/text.comp';

export interface IButtonTertiary extends ViewProps {
    icon?: any;
    onPress?: any;
    iconSize?: number
}

const ButtonTertiary: React.FC<IButtonTertiary> = ({      
    icon,
    onPress,
    style,
    children,
    iconSize,
    ...props
}) => {

    return (
        <Button
        left
        type="social"
        icon={icon}
        iconColor={Colors.quaternary}
        iconSize={iconSize ?? 18}
        style={style}
        onPress={onPress}
      >
        <Typography fontSize={16} letterSpacing={0.24}>{children}</Typography>
      </Button>
    );
}

export default ButtonTertiary;