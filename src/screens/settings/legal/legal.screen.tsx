import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LegalItems from "../../../constants/Legals";
import { Block, Tabs } from "../../../shared";
import styles from './legal.style';

export interface ILegalProps {}

const Legal: React.FC<ILegalProps> = ({}) => {
  return (
      <ScrollView style={styles.container}>
        <Tabs
          initialIndex={'privacy'}
        />
      </ScrollView>
  );
};

export default Legal;
