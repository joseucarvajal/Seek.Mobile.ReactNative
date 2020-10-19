import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Steper } from '../../../components/profile';
import { Colors } from "../../../constants";
import { Button, Input, Select, ToggleButton } from '../../../shared';

export interface IProfileProps {}

const Profile: React.FC<IProfileProps> = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Steper />
        </View>
        <View style={styles.body}>
          <Input 
            left
            color='primary'
            borderless 
            placeholder='Nickname'
            icon="user"
            iconColor={Colors.primary}
            iconSize={24}
            textInputStyle={styles.textInput}
          />
          <Input color='quaternary' borderless placeholder='First Name' textInputStyle={styles.textFisrtNameInput}/>
          <Input color='quaternary' borderless placeholder='Last Name'/>
          <Input color='quaternary' borderless placeholder='Password' password viewPass/>
          <Input color='quaternary' borderless placeholder='Confirm Password' password viewPass/>
          <ToggleButton color='primary' value={true}/>
          <ToggleButton color='primary' />
          <Text />
          <Select
            defaultValue={'f'}
            items={[
              {label: 'Male', value: 'm'},
              {label: 'Female', value: 'f'},
            ]}
            shadow
          />
          <Text />
          <Button 
            left
            type='social' 
            shadow
            icon="facebook"
            iconColor={Colors.quaternary}
            iconSize={18}
            >
            <Text style={styles.textButton}>Continue with Facebook</Text> 
          </Button>
          <Text />
          <Button
            left
            type='social' 
            color='quaternary'
            shadow
            icon="google"
            iconColor={Colors.white}
            iconSize={18}
            >
            <Text style={styles.textLabel}>Continue with Google</Text> 
          </Button>
        </View>
        <View style={styles.footerView}>
          <Button type='gradient' shadow>
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
  body: {
    width: '100%', 
    top: 100, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
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
  },
  textInput: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.primary,
  },
  textFisrtNameInput: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.black,
  },
  textButton: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.black,
  }
});