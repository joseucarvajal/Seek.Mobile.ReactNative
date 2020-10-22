import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ModesItems from '../../../constants/Modes';
import { Block, Menu } from '../../../shared';
import styles from './modes.style';

const modes: React.FC = () => {
  return (
    <Block style={styles.container}>
      <Menu items={ModesItems} />
    </Block>
  );
};

export default modes;
