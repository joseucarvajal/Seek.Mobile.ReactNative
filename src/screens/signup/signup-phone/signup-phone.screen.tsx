import React, { useState } from "react";
import { StyleSheet, View, PickerItemProps } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  Text,
  Select,
  Input,
  ButtonPrimary,
  LinkButton,
  Block,
  Spinner,
  DisplayError
} from "../../../shared";

import { Colors, FontNames, Layout } from "../../../constants";

import { SeekQLogo } from "../../../components/signup/";
import  { 
  useRequestVerificationPhoneCode 
} from "../../../hooks/signup";

export interface ISignUpPhoneProps {}


const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {
  const navigation = useNavigation();
  const [phoneIndicative, setPhoneIndicative] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const getPhoneNumber = () => `${phoneIndicative}${phoneNumber}`;
  const request = useRequestVerificationPhoneCode(getPhoneNumber());
  const { status, data, error, isLoading, isError, isFetching, refetch } = request;

  return (
    <Block safe flex space="evenly" center>
      <Spinner
        visible={isLoading || status === 'loading'}
        textContent={"Loading..."}
        animation="fade"
      />
      {(isError || status === 'error') && (
        <DisplayError visible={modalVisible} title={error.response.data.error} onVisibleChange={(visible: any) => setModalVisible(visible)} />
      )}
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
            defaultValue={phoneIndicative}
            onChangeItem = {(item: PickerItemProps)=>{
              setPhoneIndicative(item.value);              
            }}
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
          console.log("Click on continue");
          refetch();
        }}
      >
        CONTINUE
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
    
  },
  phoneIndicative: {
    width: Layout.window.width * 0.22,
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
