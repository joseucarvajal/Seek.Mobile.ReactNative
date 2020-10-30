import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import {
  Text,
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

const VerificationCode: React.FC<IVerificationCodeProps> = ({}) => {
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

  const navigation = useNavigation();
  const inputRefs = Array<TextInput>(codeVerificationCollection.length);

  const {
    error,
    isLoading,
    refetch: checkVerificationCode,
  } = useCheckVerificationCode({
    phoneOrEmail: phoneNumberOrEmail,
    codeToVerify: codeVerificationCollection.join(""),
  });

  const handleChangeDigit = (digit: string, index: any) => {
    if (isNaN(+digit)) {
      return;
    }

    if (index < codeVerificationCollection.length - 1) {
      inputRefs[index + 1].focus();
    }

    setCodeVerificationCollection(
      codeVerificationCollection.map((val, i) =>      
        i !== index ? val : digit
      )
    );
  };

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

      <View style={styles.codeForm}>
        {codeVerificationCollection.map((digit, index) => (
          <Input
            onRef={(inputRef: TextInput) => {
              inputRefs[index] = inputRef;
            }}
            maxLength={1}
            keyboardType="phone-pad"
            selectTextOnFocus
            key={index}
            value={digit}
            onChangeText={(text: string) => handleChangeDigit(text, index)}
            color="primary"
            style={styles.codeDigit}
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
  codeForm: {
    width: Layout.window.width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Layout.base,
  },
  codeDigit: {
    width: Layout.window.width * 0.13,
  },
});

export default VerificationCode;
