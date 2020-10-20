import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DropDownPicker from 'react-native-dropdown-picker';


import { useNavigation } from "@react-navigation/native";

import {
  Button,
  ButtonTertiary,
  Text,
  Select,
  Input,
} from "../../../shared";

import { Colors, FontNames, getFontStyle } from "../../../constants";

import { signUpStyles, SeekQLogo } from "../../../components/signup/";

export interface ISignUpPhoneProps {}

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>
        <SeekQLogo />

        <Text
          h1
          center
          fontFamily={FontNames.CamptonSemiBold}
          letterSpacing={-0.408}
        >
          Wellcome back!
        </Text>

        <Text p lineHeight={18} center>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.phoneForm}>
          <Select
            defaultValue={"1"}
            items={[{ label: "1", value: "1" }]}    
            style={styles.phoneIndicative}
          />
          <Input color="quaternary" style={styles.phoneNumber} />
        </View>

        <Button
          type="link"
          onPress={() => {
            console.log("having trouble logging in?");
          }}
        >
          <Text
            underline
            bold
            style={styles.linkButtonPrimary}
            fontSize={17}
            lineHeight={22}
          >
            Continue using email Instead
          </Text>
        </Button>

        <Button type="link">
          <Text color={Colors.primary}>LOGIN</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  phoneForm: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneIndicative:{
    flex: 1,
  },
  phoneNumber:{
    
    
  },
  linkButtonPrimary: {
    color: Colors.primary,
  },
});

export default SignUpPhone;
