import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import {
  useQuery
} from "react-query";

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

const getPhoneVerificationCode = async (phoneNumber:string) => {
  try{
    const url = `http://192.168.0.101:32700/api/v1/user/requestverificationcode/${phoneNumber}`;
    console.log({url});
    const { data } = await axios.get(url);
    return data;
  }
  catch(err){
    console.error(JSON.stringify(err));
  }
};

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {

  
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const { status, data, error, isFetching, refetch } = useQuery(phoneNumber, getPhoneVerificationCode, {
    refetchOnWindowFocus: false,
    enabled: false, // turned off by default, manual refetch is needed
    cacheTime: 0
  });
  

  const testFetch = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let responseJson = await response.json();
    console.log(JSON.stringify(responseJson));
  };

  const testFetch2 = async () => {
    try{
      const url = `http://192.168.0.101:32700/api/v1/user/hello`;
      console.log({url});
      let response = await fetch(url, {
        method: 'GET',
      });
      console.log('fetch 1', JSON.stringify(response));
      let responseJson = await response.text();
      console.log(responseJson);
    }
    catch(err){
      console.log('error 1', JSON.stringify(err));
    }
  };

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

      <View style={styles.phoneForm}>
        <View style={styles.phoneIndicativeView}>
          <Text fontSize={12} color={Colors.fontSoft1}>
            Enter phone
          </Text>
          <Select
            borderless
            defaultValue={"+1"}
            items={[
              { label: "+1", value: "+1" },
              { label: "+57", value: "+57" },
            ]}
            style={styles.phoneIndicative}
          />
        </View>
        <View style={styles.phoneNumberView}>
          <Text fontSize={12} color={Colors.fontSoft1}></Text>
          <Input
            value={phoneNumber}
            onChangeText={(text: string) => setPhoneNumber(text)}
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
          console.log('Click on continue');
          refetch();
        }}
      >
        CONTINUE 1
      </ButtonPrimary>

      <LinkButton
        onPress={() => {
          navigation.navigate("SignUpEmail");
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
