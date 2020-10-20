import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Steper } from '../../components/profile';
import { Colors, Layout } from "../../constants";
import { Button, Input, Select, ToggleButton, Text, MenuItem } from '../../shared';

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({ }) => {
  return (
    <ScrollView style={{paddingTop: 16}}>
      {/* <MenuItem items={items} /> */}
      <View style={styles.container}>
        <Steper />
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
        <Input color='quaternary' borderless placeholder='First Name' textInputStyle={styles.textFisrtNameInput} />
        <Input color='quaternary' borderless placeholder='Last Name' />
        <Input color='quaternary' borderless placeholder='Password' password viewPass />
        <Input color='quaternary' borderless placeholder='Confirm Password' password viewPass />
        <ToggleButton color='primary' value={true} />
        <Text />
        <Select
          defaultValue={'f'}
          items={[
            { label: 'Male', value: 'm' },
            { label: 'Female', value: 'f' },
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
        </Button>
        <Button type='gradient' shadow>
          <Text style={styles.textLabel}>CONTINUE</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Profile;

const items = [
  { title: "Edit Basic Info", id: "editBasicInfo", type: "button", color: Colors.neutral },
  { title: "Modes", id: "modes", type: "button", color: Colors.white },
  { title: "Incoming Chat", id: "incomingChat", type: "toggle", color: Colors.neutral },
  { title: "Temperature meter change", id: "temperatureMeter", type: "toggle", color: Colors.white },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    padding: Layout.base
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
  footerView: {
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