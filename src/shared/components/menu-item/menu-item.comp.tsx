import React from 'react';
import { View, Text, TouchableOpacity, ViewProps, Image } from 'react-native';
import styles from './menu-item.styles';

export interface IMenuItem extends ViewProps {
  text?: string;
  icon?: any;
}

const MenuItem: React.FC<IMenuItem> = ({
  text,
  icon
}) => {
  return (
    <View style={ styles.container }>
      <TouchableOpacity>
        <Text style={ styles.text }>{text}</Text>
        <Image
          style={styles.icon}
          source={{ uri: `../../../../assets/images/${icon}` }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default MenuItem;