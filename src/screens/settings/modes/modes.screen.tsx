import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ModesItems from '../../../constants/Modes';
import { MenuItem } from '../../../shared';
import styles from './modes.style';

const modes: React.FC = () => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <View style={styles.body}>
          <MenuItem items={ModesItems} />
        </View>
      </View>
    </SafeAreaView>  
  );
};

export default modes;
