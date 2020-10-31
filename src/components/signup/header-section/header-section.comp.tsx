import React from "react";
import { Text } from "../../../shared";
import { View, StyleSheet } from "react-native";
import { Layout } from "../../../constants";

export interface ISeekQLogoProps {
  headerText: string;
}

const PolicySection: React.FC<ISeekQLogoProps> = ({children, headerText}) => {
  return (
    <View>

      <Text h1 center style={styles.header}>
        {headerText}
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
