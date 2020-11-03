import React, { useState } from 'react';
import { Switch, ViewProps } from "react-native";
import { Colors } from '../../../constants';
import { ColorType } from '../button/button.comp';

export interface IToggleButtonProps extends ViewProps {
    value?: any;
    color: ColorType;
    shadow?: any;
    disabled?: any;
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
    onValueChange?: any;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({
    value: initValue,
    color,
    shadow,
    disabled,
    children,
    onPress,
    onValueChange,
    ...props
}) => {
    const [value, setValue] = useState(initValue);
    const thumbColor = value === true ? Colors[color] : Colors.muted
    const handleChangeValue = () => {
      setValue(!value);
      onValueChange(!value);
    };

    return (
      <Switch
        value={value}
        thumbColor={thumbColor}
        ios_backgroundColor={Colors.neutral}
        onValueChange={handleChangeValue}
        trackColor={{
          true: Colors.gray,
          false: Colors.gray
        }}
        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
        {...props}
      />
    );
}

export default ToggleButton;