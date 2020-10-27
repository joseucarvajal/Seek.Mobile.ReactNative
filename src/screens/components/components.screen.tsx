import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Steper, ModalBackground, ModalNoBackground } from '../../components/profile';
import { Colors, Icons, Images, Layout } from "../../constants";
import { Button, Input, Select, ToggleButton, Text, Icon, Tabs, Accordion, Checkbox, Card, Calendar, Video, Block, Chips, MenuItem } from '../../shared';

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({ }) => {
  const [modalVisibleBackground, setModalVisibleBackground] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ScrollView style={{ paddingTop: 1 }}>
      <MenuItem title={items[0].title} type='Button' color={Colors.neutral} onValueChange={() => console.log(items[0].title)} />
      <MenuItem title={items[1].title} type='Button' color={Colors.white} onValueChange={() => console.log(items[1].title)} />
      <MenuItem title={items[2].title} type='toggle' color={Colors.neutral} onValueChange={() => console.log(items[2].title)} />
      <MenuItem title={items[3].title} type='toggle' color={Colors.white} onValueChange={() => console.log(items[3].title)} />
      <MenuItem title={items[2].title} type='toggle' color={Colors.neutral} onValueChange={() => console.log(items[2].title)} />
      <Tabs initialIndex={'terms'} />
      <Block style={styles.container}>
        <Steper stepCount={4} currentPage={0} />
        <Text />
        <Chips initialChips={["React", "Native", "Javascript", "Visual Studio"]} onChangeChips={(chips: any) => console.log(chips)} alertRequired={false} />
        <Text />
        <Block flex >
          <Video videoId='M1mL-reid3M' />
        </Block>
        <Card
          full
          item={{ image: Images.UploadPhoto }}
          icon={Icons.edit}
          iconColor={Colors.quaternary}
          iconSize={28}
        />
        <Text />

        <Block flex center row space='around'>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisibleBackground(true)}>
            <Text h3 bold color={Colors.white}>Show Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text h3 bold color={Colors.white}>Show Modal</Text>
          </TouchableOpacity>
        </Block>

        <ModalBackground visible={modalVisibleBackground} onVisibleChange={(visible: any) => setModalVisibleBackground(visible)} />
        <ModalNoBackground visible={modalVisible} onVisibleChange={(visible: any) => setModalVisible(visible)}/>

        <Text />
        <Calendar />
        <Text />
        <Checkbox label='Art' iconColor={Colors.primary} />
        <Checkbox label='Beauty' iconColor={Colors.primary} />
        <Checkbox label='Cosplay' iconColor={Colors.primary} />
        <Checkbox label='Fishing' iconColor={Colors.primary} />
        <Text />
        <Accordion title={accordion[0].title} text={accordion[0].text} shadow />
        <Text />
        <Text />
        <Accordion title={accordion[1].title} text={accordion[1].text} shadow />
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
          family='seekQ'
          icon={Icons.user}
          iconColor={Colors.primary}
          iconSize={30}
          textInputStyle={styles.textInput}
        />
        <Input color='quaternary' borderless placeholder='First Name' textInputStyle={styles.textFisrtNameInput} />
        <Input color='quaternary' borderless placeholder='Last Name' />
        <Input color='quaternary' borderless placeholder='Password' password viewPass />
        <Input color='quaternary' borderless placeholder='Confirm Password' password viewPass />
        <ToggleButton color='primary' value={true} />
        <ToggleButton color='primary' />
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
          onPress={() => console.log("")}
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
              family='seekQ'
              name={Icons.email_phone}
              size={22}
              style={{ paddingLeft: Layout.base }}
              color={Colors.quaternary}
            />
          }
          onPress={() => console.log("")}
        >
          <Text h3 center>User Email Phone</Text>
        </Button>
        <Text />
        <Button
          left
          type='social'
          shadow
          icon="google"
          iconColor={Colors.quaternary}
          iconSize={18}
          onPress={() => console.log("")}
        >
          <Text h3 center>Continue with Google</Text>
        </Button>
        <Text />
        <Button type='backgroundless' onPress={() => console.log('LOGIN')}>
          <Text h2 center color={Colors.primary}>LOGIN</Text>
        </Button>
        <Button type='link'>
          <Text h3 center underline bold color={Colors.primary}>Continue using email Instead</Text>
        </Button>
        <Button type='gradient' onPress={() => console.log("")} shadow>
          <Text h3 center color={Colors.white}>CONTINUE</Text>
        </Button>
      </Block>
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
    text: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
  {
    title: 'Etiam integer ornare',
    text: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
  {
    title: 'Purus dictum',
    text: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
  },
  {
    title: 'Dolor velit lacus',
    text: 'Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.',
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
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: Colors.transparent,
    padding: 10,
    elevation: 2
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 20,
    elevation: 2
  },
  horizontalImage: {
    height: 120,
    width: 'auto'
  }
});