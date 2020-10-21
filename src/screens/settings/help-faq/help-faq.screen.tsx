import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './help-faq.style';

const HelpFaq: React.FC = () => {
  return (
      <View style={ styles.container }>
        <Text style={ styles.body }>help-faq</Text>
      </View>
  );
}



export default HelpFaq;
