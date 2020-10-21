import React from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  Text,
  Select,
  Input,
  ButtonPrimary,
  LinkButton,
  Block,
} from "../../../shared";

import { Colors, FontNames, Layout } from "../../../constants";

import { SeekQLogo } from "../../../components/signup/";

export interface ISignUpEmailProps {}

const SignUpEmail: React.FC<ISignUpEmailProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <Block safe flex space="evenly" center>
      <SeekQLogo />

      <Text h1 center fontFamily={FontNames.CamptonSemiBold}>
        Wellcome back!
      </Text>

      <Text p center>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>

      <View style={styles.emailForm}>
        <View style={styles.emailNumberView}>
          <Text fontSize={12} color={Colors.fontSoft1}>
            Enter Email
          </Text>
          <Input
            color="primary"
            style={styles.email}
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
          navigation.navigate("SignUpPhone");
        }}
      >
        Continue using phone Instead
      </LinkButton>

      <LinkButton
        upper
        onPress={() => {
          console.log("LOGIN");
        }}
      >
        LOGIN
      </LinkButton>
    </Block>
  );
};

const styles = StyleSheet.create({
  emailForm: {
    width: Layout.window.width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Layout.base,    
  },
  emailNumberView: {
    flex: 1,
  },
  email: {
    top: -7,
    width: "100%",
    backgroundColor: Colors.transparent,
  },
});

export default SignUpEmail;
