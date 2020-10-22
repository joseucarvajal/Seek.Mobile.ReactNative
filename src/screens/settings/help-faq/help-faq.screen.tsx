import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import FaqItems from "../../../constants/Faqs";
import { Accordion } from "../../../shared";
import styles from './help-faq.style';

const HelpFaq: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Accordion items={FaqItems} />
    </ScrollView>
  );
};

export default HelpFaq;
