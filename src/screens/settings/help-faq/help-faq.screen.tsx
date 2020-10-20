import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './help-faq.style';

const HelpFaq: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={ styles.container }>
        <Text style={ styles.title }>help-faq</Text>
      </View>
    </SafeAreaView>
  );
}



export default HelpFaq;
