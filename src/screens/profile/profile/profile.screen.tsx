import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Steper } from '../../../components/profile';
import { Colors } from "../../../constants";
import { Button, Input, Select, ToggleButton, Typography, MenuItem } from '../../../shared';

export interface IProfileProps {}

const Profile: React.FC<IProfileProps> = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Steper />
        </View>
        <View style={styles.body}>
          <MenuItem items={items} />
          {/* <Input 
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
          <Text />
          <Button type='backgroundless'>
            <Text style={styles.loginButton}>LOGIN</Text> 
          </Button>
          <Button type='link'>
            <Text underline bold style={styles.linkButton}>Continue using email Instead</Text> 
          </Button> */}
        </View>
        <View style={styles.footerView}>
          <Button type='gradient' shadow>
            <Typography style={styles.textLabel}>CONTINUE</Typography> 
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const items = [
  { title: "Edit Basic Info", id: "editBasicInfo", type: "button", color: Colors.neutral },
  { title: "Profile", id: "profile", type: "button", color: Colors.white },
  { title: "Notifications", id: "notifications", type: "button", color: Colors.neutral },
  { title: "Modes", id: "modes", type: "button", color: Colors.white },
  { title: "Incoming Chat", id: "incomingChat", type: "toggle", color: Colors.neutral },
  { title: "Temperature meter change", id: "temperatureMeter", type: "toggle", color: Colors.white },
  { title: "In app vibrations", id: "vibration", type: "toggle", color: Colors.neutral },
];

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
    top: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
  },
  footerView:{
    width: '100%', 
    height: 40, 
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
  },
  loginButton: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.primary,
  },
  linkButton: {
    fontSize: 17,
    textAlign: 'center',
    color: Colors.primary,
  }
});