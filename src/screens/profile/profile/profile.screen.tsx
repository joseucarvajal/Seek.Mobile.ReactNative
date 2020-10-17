import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Steper } from '../../../components';
import { Colors } from "../../../constants";
import { Button } from '../../../shared';

export interface IProfileProps {}

const Profile: React.FC<IProfileProps> = ({}) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Steper />
        <Button large>
          <Text style={styles.textLabel}>CONTINUE</Text> 
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
  textLabel: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.white,
  }
});