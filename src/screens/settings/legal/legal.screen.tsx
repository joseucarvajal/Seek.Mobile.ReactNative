import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LegalItems from "../../../constants/Legals";
import styles from './legal.style';

export interface ILegalProps {}

const Legal: React.FC<ILegalProps> = ({}) => {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        {LegalItems.map((legal) => (
          <Text key={legal.id} onPress={() => legal.action()}>
            {legal.title}
          </Text>
        ))}
      </View>
      <View style={styles.body}>
        <Text>
          Something text...
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Legal;
