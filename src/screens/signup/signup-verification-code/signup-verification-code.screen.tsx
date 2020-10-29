import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import {
  Text,
  Select,
  Input,
  ButtonPrimary,
  LinkButton,
  Block,
  Spinner,
  DisplayError,
} from "../../../shared";

import { Colors, FontNames, Layout } from "../../../constants";

import { SeekQLogo } from "../../../components/signup/";
import { RootStackParamList } from "../../../types";

import { useCheckVerificationCode } from "../../../hooks/signup";

type SignUPVerificationCodeRouteProp = RouteProp<
  RootStackParamList,
  "SignUpVerificationCode"
>;

export interface IVerificationCodeProps {}

const SignUpEmail: React.FC<IVerificationCodeProps> = ({}) => {
  //6 digits
  const [codeVerificationCollection, setCodeVerificationCollection] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const route = useRoute<SignUPVerificationCodeRouteProp>();
  const { phoneNumberOrEmail } = route.params;

  const {
    error,
    isLoading,
    refetch: checkVerificationCode,
  } = useCheckVerificationCode({
    phoneOrEmail: phoneNumberOrEmail,
    codeToVerify: codeVerificationCollection.join(""),
  });

  const handleChangeDigit = (digit: string, index: any) => {

    if(isNaN(+digit)){
      return;
    }

    if(digit && digit.length != 1){
      return;
    }

    if(index < codeVerificationCollection.length - 1){
      if(digit){
        inputRefs[index + 1].focus();
      }
    }

    setCodeVerificationCollection(
      codeVerificationCollection.map((val: string, i: Number) =>
        i !== index ? val : digit
      )
    );
  };

  const navigation = useNavigation();

  const inputRefs = Array(6);

  return (
    <Block safe flex space="evenly" center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <SeekQLogo />

      <Text h1 center medium>
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

      <View style={styles.phoneForm}>
        {codeVerificationCollection.map((digit, index) => (
          <Input
            onRef={(inputRef: any) => {
              inputRefs[index] = inputRef;
            }}
            key={index}
            value={digit}
            onChangeText={(text: string) => handleChangeDigit(text, index)}
            color="primary"
            style={styles.phoneIndicative}
            borderless
            textInputStyle={{
              fontFamily: FontNames.CamptonSemiBold,
              color: Colors.fontNormal,
            }}
          />
        ))}
      </View>

      <ButtonPrimary
        onPress={() => {
          checkVerificationCode();
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
  phoneForm: {
    width: Layout.window.width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Layout.base,
  },
  phoneIndicativeView: {
    display: "flex",
    textAlign: "center",
    alignContent: "center",
  },
  phoneIndicative: {
    width: Layout.window.width * 0.1,
  },
});

export default SignUpEmail;
