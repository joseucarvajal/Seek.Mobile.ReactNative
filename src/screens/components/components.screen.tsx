import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Steper, ModalBackground, ModalNoBackground } from '../../components/profile';
import { Colors, Icons, Images, Layout } from "../../constants";

import {
  Button,
  Input,
  Select,
  ToggleButton,
  Text,
  Icon,
  Tabs,
  Accordion,
  Checkbox,
  Card,
  Calendar,
  Video,
  Block,
  Chips,
  MenuItem,
  Spinner,
  Background,
  Image
} from '../../shared';

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({ }) => {

  const [modalVisibleBackground, setModalVisibleBackground] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [spinnerVisible, setSpinnerVisible] = React.useState(false);

  const setSpinner = (visible: boolean) => {
    setSpinnerVisible(visible)
    setTimeout(() => { setSpinnerVisible(false) }, 5000)
  }

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
          <TouchableOpacity style={styles.button} onPress={() => setModalVisibleBackground(!modalVisibleBackground)}>
            <Text h3 bold color={Colors.white}>Show Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <Text h3 bold color={Colors.white}>Show Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setSpinner(!spinnerVisible)}>
            <Text h3 bold color={Colors.white}>Show Spinner</Text>
          </TouchableOpacity>
        </Block>

        <ModalBackground visible={modalVisibleBackground} onVisibleChange={(visible: any) => setModalVisibleBackground(visible)} />
        <ModalNoBackground visible={modalVisible} onVisibleChange={(visible: any) => setModalVisible(visible)} />

        <Spinner visible={spinnerVisible}/>

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

        <Block style={{ width: Layout.window.width, height: Layout.window.height, paddingTop: Layout.base * 2, marginLeft: -Layout.base }}>
          <Background image={Images.Background_1}>
            <Block style={{ position: 'absolute', bottom: 0, alignSelf: 'center', margin: Layout.window.width / 3 }}>
              <Image source={Images.LogoWhite} />
            </Block>
          </Background>
        </Block>

        <Block style={{ width: Layout.window.width, height: Layout.window.height, paddingTop: Layout.base * 2, marginLeft: -Layout.base }}>
          <Background image={Images.Background_2} />
        </Block>

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
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 20,
    elevation: 2
  }
});