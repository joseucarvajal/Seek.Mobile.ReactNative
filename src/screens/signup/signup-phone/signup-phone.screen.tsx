import React, { useState } from "react";
import { StyleSheet, View, PickerItemProps } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";

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
import { useSendVerificationCode } from "../../../hooks/signup";

export interface ISignUpPhoneProps {}

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {
  const navigation = useNavigation();
  const [phoneIndicative, setPhoneIndicative] = useState("+1");

  type TFormData = {
    phoneIndicative: PickerItemProps;
    phoneNumber: string;
  };
  const { control, handleSubmit, errors, getValues } = useForm<TFormData>();
  const onSubmit = handleSubmit(({ phoneNumber }) => {
    console.log(getValues());
    getVerificationCode();
  });

  const getCompletePhoneNumber = () =>
    `${phoneIndicative}${getValues().phoneNumber}`;
  const {
    error,
    isLoading,
    refetch: getVerificationCode,
  } = useSendVerificationCode(getCompletePhoneNumber());

  const items = [    
    { label: "+1", value: "+1" },
    { label: "+57", value: "+57" },
  ];

  return (
    <Block safe flex space="evenly" center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <SeekQLogo />

      <Text h1 center medium>
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
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Select
                borderless
                onChangeItem={(item: PickerItemProps) => {
                  onChange(item);
                }}
                items={items}
                style={styles.phoneIndicative}
                defaultValue={items[0].value}
              />
            )}
            name="phoneIndicative"
            rules={{ required: true }}
            defaultValue={items[0]}
          ></Controller>
        </View>
        <View style={styles.phoneNumberView}>
          <Text fontSize={12} color={Colors.fontSoft1}></Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                onChangeText={(value: string) => onChange(value)}
                color="primary"
                keyboardType="phone-pad"
                style={styles.phoneNumber}
                borderless
                textInputStyle={{
                  fontFamily: FontNames.CamptonSemiBold,
                  color: Colors.fontNormal,
                }}
              />
            )}
            name="phoneNumber"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phoneNumber && <Text>Phone number is required.</Text>}
        </View>
      </View>

      <ButtonPrimary
        onPress={() => {
          onSubmit();
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
  phoneIndicativeView: {},
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
