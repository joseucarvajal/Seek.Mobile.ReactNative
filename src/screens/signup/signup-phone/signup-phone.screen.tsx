import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DropDownPicker from "react-native-dropdown-picker";

import { useNavigation } from "@react-navigation/native";

import {
  Button,
  ButtonTertiary,
  Text,
  Select,
  Input,
  ButtonPrimary,
  LinkButton,
} from "../../../shared";

import { Colors, FontNames, getFontStyle, Layout } from "../../../constants";

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
        >
          Wellcome back!
        </Text>

        <Text p lineHeight={18} center>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.phoneForm}>
          <View style={styles.phoneIndicativeView}>
            <Text
              fontSize={12}
              color={Colors.fontSoft1}
            >
              Enter phone
            </Text>
            <Select
              borderless
              defaultValue={"+1"}
              items={[{ label: "+1", value: "+1" }]}
              style={styles.phoneIndicative}
            />
          </View>
          <View style={styles.phoneNumberView}>
          <Text
              fontSize={12}              
              color={Colors.fontSoft1}
            >
               
            </Text>            
            <Input
              color="primary"
              style={styles.phoneNumber}
              borderless
              textInputStyle={{
                fontFamily: FontNames.CamptonSemiBold,
                color: Colors.fontNormal,
              }}
            />
          </View>
        </View>

        <ButtonPrimary
          onPress={() => {
            console.log("continue");
          }}
        >
          CONTINUE
        </ButtonPrimary>

        <LinkButton
          onPress={() => {
            console.log("Continue using email Instead");
          }}
        >
          Continue using email Instead
        </LinkButton>

        <LinkButton
          upper
          onPress={() => {
            console.log("LOGIN");
          }}
        >
          LOGIN
        </LinkButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  phoneForm: {
    width: Layout.window.width,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Layout.base,
  },
  phoneIndicativeView: {
    width: Layout.window.width * 0.2,
  },
  phoneIndicative: {
    width: Layout.window.width * 0.2,
  },
  phoneNumberView: {
    flex: 1,
    borderColor: "blue",
    marginLeft: Layout.base - 5,
  },
  phoneNumber: {
    width: "100%",
    backgroundColor: Colors.transparent,
  },
});

export default SignUpPhone;
