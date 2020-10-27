import React from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

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
import { RootStackParamList } from "../../../types";

type SignUPVerificationCodeRouteProp = RouteProp<
  RootStackParamList,
  "SignUpVerificationCode"
>;

export interface IVerificationCodeProps {}

const SignUpEmail: React.FC<IVerificationCodeProps> = ({}) => {
  const navigation = useNavigation();

  const route = useRoute<SignUPVerificationCodeRouteProp>();
  const { phoneNumberOrEmail } = route.params;

  return (
    <Block safe flex space="evenly" center>
      <SeekQLogo />

      <Text h1 center fontFamily={FontNames.CamptonSemiBold}>
        Enter verification code
      </Text>

      <View>
        <Text p center>
          A verification code we send to
        </Text>
        <Text p center>
          {phoneNumberOrEmail}
        </Text>
      </View>

      <View style={styles.emailForm}>
        <View style={styles.emailNumberView}>
          <Text fontSize={12} color={Colors.fontSoft1}>
            Enter Email
          </Text>
          <Input
            color="primary"
            style={styles.codeDigit}
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
  codeDigit: {
    top: -7,
    width: "100%",
    backgroundColor: Colors.transparent,
  },
});

export default SignUpEmail;
