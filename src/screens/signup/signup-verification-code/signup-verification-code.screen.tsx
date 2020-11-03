import React, { useState } from "react";
import { TextInput } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { Text, Input, ButtonPrimary, LinkButton, Block, Spinner, DisplayError } from "../../../shared";
import { Colors, FontNames } from "../../../constants";
import { SeekQLogo, HeaderSection } from "../../../components/signup/";
import { RootStackParamList } from "../../../types";

import { useCheckVerificationCode } from "../../../hooks/signup";
import { useIdentityState } from "../../../providers/identity";

type SignUPVerificationCodeRouteProp = RouteProp<RootStackParamList, "SignUpVerificationCode">;

export interface IVerificationCodeProps { }

const VerificationCode: React.FC<IVerificationCodeProps> = ({ }) => {
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
  //const { phoneNumberOrEmail } = route.params;

  const { applicationUser } = useIdentityState();

  const navigation = useNavigation();
  const inputRefs = Array<TextInput>(codeVerificationCollection.length);

  const {
    verifyCode,
    data,
    error,
    isLoading,
  } = useCheckVerificationCode();

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
    <Block safe flex>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <Block flex center>
        <SeekQLogo />
      </Block>

      <Block flex>
        <HeaderSection headerText="Enter verification code">
          <Text p center>A verification code we send to</Text>
          <Text p center>{applicationUser?.phoneNumber}</Text>

          <Text center style={{ paddingTop: 20 }}>
            <LinkButton center>{"< "}</LinkButton>
            <LinkButton underline center onPress={() => navigation.goBack()}>Edit</LinkButton>
          </Text>
        </HeaderSection>
      </Block>

      <Block flex row top left>
        {codeVerificationCollection.map((digit, index) => (
          <Block flex key={index} padding={5}>
            <Input
              onRef={(inputRef: TextInput) => {
                inputRefs[index] = inputRef;
              }}
              maxLength={1}
              keyboardType="phone-pad"
              selectTextOnFocus
              value={digit}
              onChangeText={(text: string) => handleChangeDigit(text, index)}
              color="primary"
              style={{ width: 'auto' }}
              borderless
              textInputStyle={{
                fontFamily: FontNames.CamptonSemiBold,
                color: Colors.fontNormal,
              }}
            />
          </Block>
        ))}
      </Block>

      <Block flex center middle space='around'>
        <ButtonPrimary
          onPress={() => { navigation.navigate("SignUpCreatePassword")
            // if (codeVerificationCollection.join("").length === codeVerificationCollection.length) {
            //   verifyCode(phoneNumberOrEmail, codeVerificationCollection.join(""));
            // }
          }}
        >
          VALIDATE
        </ButtonPrimary>

        <LinkButton underline onPress={() => navigation.navigate("SignUpPhone")}>Resend code</LinkButton>
      </Block>
    </Block>
  );
};

export default VerificationCode;