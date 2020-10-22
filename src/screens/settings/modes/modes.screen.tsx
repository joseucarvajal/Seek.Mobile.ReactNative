import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ModesItems from '../../../constants/Modes';
import { Block, MenuItem } from '../../../shared';
import styles from './modes.style';

const modes: React.FC = () => {
  return (
    <Block flex>
      <ScrollView style={styles.container}>
        <MenuItem items={ModesItems} />
      </ScrollView>
    </Block>
  );
};

export default modes;
