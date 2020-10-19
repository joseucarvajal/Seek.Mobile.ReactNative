import React from 'react';
import { Switch, ViewProps } from "react-native";
import { Colors } from '../../../constants';

export interface IToggleButtonProps extends ViewProps {
    value?: any;
    color: ColorType;
    shadow?: any;
    disabled?: any;
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
}

export type ColorType = "primary" | "secondary" | "tertiary" | "quaternary";

const ToggleButton: React.FC<IToggleButtonProps> = ({
    value,
    color,
    shadow,
    disabled,
    children,
    onPress,
    ...props
}) => {

    const thumbColor = value === true ? Colors[color] : Colors.muted

    return (
      <Switch
        value={value}
        thumbColor={thumbColor}
        trackColor={{
          true: "#d3d3d3",
          false: Colors.muted
        }}
        {...props}
      />
    );
}

export default ToggleButton;