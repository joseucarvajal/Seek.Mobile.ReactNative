import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Steper } from '../../components/profile';
import { Colors, Layout } from "../../constants";
import { Button, Input, Select, ToggleButton, Text, Icon, Tabs, Accordion, Checkbox } from '../../shared';

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({ }) => {
  return (
    <ScrollView style={{ paddingTop: 1 }}>
      {/* <MenuItem items={items} /> */}
      <View style={styles.container}>
        <Steper />
        <Text />
        <Tabs
          initialIndex={'terms'}
        />
        <Text />
        <Checkbox label='Art' iconColor={Colors.primary} />
        <Checkbox label='Beauty' iconColor={Colors.primary}/>
        <Checkbox label='Cosplay' iconColor={Colors.primary}/>
        <Checkbox label='Fishing' iconColor={Colors.primary}/>
        <Text />
        <Accordion
          title = {accordion[0].title}
          items = {accordion[0].data}
          shadow
        />
        <Text />
        <Select
          small
          borderless
          defaultValue={'usa'}
          items={[
            { label: '+1', value: 'usa' },
            { label: '+57', value: 'colombia' },
          ]}
          shadow
        />
        <Text />
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
        <ToggleButton color='primary' value={false} />
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
          <Text h3 center>Continue with Facebook</Text>
        </Button>
        <Text />
        <Button
          left
          type='social'
          shadow
          iconContent={
            <Icon
              name={'email_phone'}
              size={22}
              style={{ paddingLeft: Layout.base }}
              color={Colors.quaternary}
            />
          }
        >
          <Text h3 center>User Email Phone</Text>
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
          <Text h3 center color={Colors.white}>Continue with Google</Text>
        </Button>
        <Text />
        <Button type='backgroundless'>
          <Text h2 center color={Colors.primary}>LOGIN</Text>
        </Button>
        <Button type='link'>
          <Text h3 center underline bold color={Colors.primary}>Continue using email Instead</Text>
        </Button>
        <Button type='gradient' shadow>
          <Text h3 center color={Colors.white}>CONTINUE</Text>
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

const accordion = [
  {
    title: 'How to Upgrade?',
    data: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
  {
    title: 'Etiam integer ornare',
    data: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
  {
    title: 'Purus dictum',
    data: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
  {
    title: 'Dolor velit lacus',
    data: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
]

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
  textInput: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.primary,
  },
  textFisrtNameInput: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.black,
  }
});