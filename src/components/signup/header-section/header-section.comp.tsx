import React from "react";
import { Text } from "../../../shared";
import { View, StyleSheet } from "react-native";
import { Layout } from "../../../constants";

export interface ISeekQLogoProps {}

const PolicySection: React.FC<ISeekQLogoProps> = ({children}) => {
  return (
    <View>

      <Text h1 center style={styles.header}>
        Welcome
      </Text>

      {children}
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: Layout.base + 10
  }
});

export default PolicySection;
