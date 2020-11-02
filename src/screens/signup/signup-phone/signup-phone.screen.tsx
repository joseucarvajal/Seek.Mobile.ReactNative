import React from "react";
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

import { SeekQLogo, HeaderSection } from "../../../components/signup/";
import { useSendVerificationCode } from "../../../hooks/signup";

export interface ISignUpPhoneProps {}

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {
  const navigation = useNavigation();

  type TFormData = {
    phoneIndicative: PickerItemProps;
    phoneNumber: string;
  };
  const { control, handleSubmit, errors, getValues } = useForm<TFormData>();
  const onSubmit = handleSubmit(({ phoneNumber, phoneIndicative }) => {
    console.log(getValues());
    getVerificationCode();
  });

  const {
    error,
    isLoading,
    refetch: getVerificationCode,
  } = useSendVerificationCode(`${getValues().phoneIndicative?.value}${getValues().phoneNumber}`);

  const indicativeItems = [
    { label: "+1", value: "+1" },
    { label: "+57", value: "+57" },
  ];

  return (
    <Block safe flex space="evenly" center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <SeekQLogo />

      <HeaderSection headerText="Welcome">
        <Text center light p>
          By registering, you agree to Our terms of
        </Text>
        <Text center light p>
          Service<Text>, </Text>
          <Text center light p>
            Privacy Policy<Text light>, </Text>
          </Text>
          <Text center light p>
            and Cookie Policy
          </Text>
        </Text>
      </HeaderSection>

      <View style={styles.phoneForm}>
        <View style={styles.phoneIndicativeView}>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Select
                borderless
                label="Enter phone"
                onChangeItem={(item: PickerItemProps) => {
                  onChange(item);
                }}
                items={indicativeItems}
                style={styles.phoneIndicative}
                defaultValue={indicativeItems[0].value}
              />
            )}
            name="phoneIndicative"
            rules={{ required: true }}
            defaultValue={indicativeItems[0]}
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
            rules={{ required: true, minLength: 4 }}
            defaultValue=""
          />
          {errors.phoneNumber && <Text>Enter a valid phone number</Text>}
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
        underline
        onPress={() => {
          navigation.navigate("SignUpEmail");
        }}
      >
        Continue using email Instead
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
