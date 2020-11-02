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

import { SeekQLogo, HeaderSection } from "../../../components/signup/";
import { RootStackParamList } from "../../../types";

import { useCheckVerificationCode } from "../../../hooks/signup";
import { useIdentityState } from "../../../providers/identity";

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

  const { applicationUser } = useIdentityState();

  const navigation = useNavigation();
  const inputRefs = Array<TextInput>(codeVerificationCollection.length);

  const {
    error,
    isLoading,
    refetch: checkVerificationCode,
  } = useCheckVerificationCode(
    phoneNumberOrEmail,
    codeVerificationCollection.join(""),
  );

  const handleChangeDigit = (digit: string, index: any) => {
    if (isNaN(+digit)) {
      return;
    }

    if (index < codeVerificationCollection.length - 1) {
      inputRefs[index + 1].focus();
    }

    setCodeVerificationCollection(
      codeVerificationCollection.map((val, i) => (i !== index ? val : digit))
    );
  };

  return (
    <Block safe flex space="evenly" center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <SeekQLogo />

      <HeaderSection headerText="Enter verification code">
        <View>
          <Text p center>
            A verification code we send to
          </Text>
          <Text p center>
            new: {applicationUser?.phoneNumber}
          </Text>

          <Text center style={{ marginTop: 20 }}>
            <LinkButton center>{"< "}</LinkButton>
            <LinkButton
              underline
              center
              onPress={() => {
                navigation.goBack();
              }}
            >
              Edit
            </LinkButton>
          </Text>
        </View>
      </HeaderSection>

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
          if (
            codeVerificationCollection.join("").length ===
            codeVerificationCollection.length
          ) {
            checkVerificationCode();
          }
        }}
      >
        VALIDATE
      </ButtonPrimary>

      <LinkButton
        underline
        onPress={() => {
          navigation.navigate("SignUpPhone");
        }}
      >
        Resend code
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
