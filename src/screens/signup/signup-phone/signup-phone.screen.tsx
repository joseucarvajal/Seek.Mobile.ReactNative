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

export interface ISignUpPhoneProps {}

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <Block safe flex space='evenly' center>   
        <SeekQLogo />

        <Text
          h1
          center
          fontFamily={FontNames.CamptonSemiBold}
        >
          Wellcome back!
        </Text>

        <Text p center>
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
            navigation.navigate('SignUpEmail');
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
    </Block>
  );
};

const styles = StyleSheet.create({
  phoneForm: {
    width: Layout.window.width,
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
