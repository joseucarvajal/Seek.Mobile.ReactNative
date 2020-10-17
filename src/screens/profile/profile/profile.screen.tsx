import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Steper } from '../../../components';
import { Colors, Layout } from "../../../constants";
import { Button } from '../../../shared';

export interface IProfileProps {}

const Profile: React.FC<IProfileProps> = ({}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Steper />
        </View>
        <View style={styles.footerView}>
          <Button gradient shadow disabled>
            <Text style={styles.textLabel}>CONTINUE</Text> 
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  headerView: {
    width: '100%', 
    backgroundColor: Colors.white, 
    justifyContent: 'flex-start', 
    position: 'absolute',
    top: 5
  },
  footerView:{
    width: '100%', 
    height: 60, 
    backgroundColor: Colors.white, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
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