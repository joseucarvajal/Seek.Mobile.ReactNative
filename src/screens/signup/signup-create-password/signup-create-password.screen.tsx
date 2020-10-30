import React from "react";
import { StyleSheet, View, PickerItemProps } from "react-native";

import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";

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

import { SeekQLogo, HeaderSection } from "../../../components/signup";
import { useConfirmPasswordCreateUser } from "../../../hooks/signup";
import { RootStackParamList } from "../../../types";

export interface ISignUpCreatePasswordProps {}

type SignUpCreatePasswordRouteProps = RouteProp<
  RootStackParamList,
  "SignUpCreatePassword"
>;

const SignUpCreatePassword: React.FC<ISignUpCreatePasswordProps> = ({}) => {
  
  const navigation = useNavigation();

  const route = useRoute<SignUpCreatePasswordRouteProps>();
  const { phoneNumberOrEmail } = route.params;

  type TFormData = {
    password: string;
    passwordConfirm: string;
  };
  const { control, handleSubmit, errors, getValues } = useForm<TFormData>();
  const onSubmit = handleSubmit(({ passwordConfirm: phoneNumber, password: phoneIndicative }) => {
    console.log(getValues());
    confirmPasswordCreateUser();
  });

  const {
    error,
    isLoading,
    refetch: confirmPasswordCreateUser,
  } = useConfirmPasswordCreateUser({
    phoneOrEmail: phoneNumberOrEmail,
    password: ''
  });
  
  return (
    <Block safe flex space="evenly" center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <SeekQLogo />

      <HeaderSection headerText="Create your password">
      </HeaderSection>

      <View style={styles.passwordForm}>
        <View>
          <Text fontSize={12} color={Colors.fontSoft1}></Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                label="Password"
                onChangeText={(value: string) => onChange(value)}
                color="primary"
                keyboardType="phone-pad"
                borderless
                password={true}
                textInputStyle={{
                  fontFamily: FontNames.CamptonSemiBold,
                  color: Colors.fontNormal,
                }}
              />
            )}
            name="password"
            rules={{ required: true, minLength: 4 }}
            defaultValue=""
          />
          {errors.passwordConfirm && <Text>Enter a phone number</Text>}
        </View>
        <View>
          <Text fontSize={12} color={Colors.fontSoft1}></Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                label="Confirm password"
                onChangeText={(value: string) => onChange(value)}
                color="primary"
                keyboardType="phone-pad"
                borderless
                password
                textInputStyle={{
                  fontFamily: FontNames.CamptonSemiBold,
                  color: Colors.fontNormal,
                }}
              />
            )}
            name="passwordConfirm"
            rules={{ required: true, minLength: 4 }}
            defaultValue=""
          />
          {errors.passwordConfirm && <Text>Enter a phone number</Text>}
        </View>
      </View>

      <ButtonPrimary
        onPress={() => {
          onSubmit();
        }}
      >
        SAVE
      </ButtonPrimary>

    </Block>
  );
};

const styles = StyleSheet.create({
  passwordForm: {
    width: Layout.window.width,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Layout.base,
  },
});

export default SignUpCreatePassword;
