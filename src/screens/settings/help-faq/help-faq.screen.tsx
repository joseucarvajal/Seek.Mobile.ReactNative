import React from 'react';
import { StyleSheet } from "react-native";
import FaqItems from "../../../constants/Faqs";
import { Accordion }  from '../../../components/settings';
import { Block } from '../../../shared';
import { Colors } from '../../../constants';

const HelpFaq: React.FC = () => {
  return (
    <Block style={styles.container}>
      <Accordion items={FaqItems} />
    </Block>
  );
};

export default HelpFaq;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  }
});