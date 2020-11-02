import React, { useRef } from "react";
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
import { useSetUserPassword } from "../../../hooks/signup";
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

  const {setUserPassword, isLoading, error} = useSetUserPassword();

  type TFormData = {
    password: string;
    passwordConfirm: string;
  };
  const { control, handleSubmit, errors, getValues, watch, setError } = useForm<
    TFormData
  >();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = handleSubmit(
    ({ password, passwordConfirm }) => {
      setUserPassword(password, passwordConfirm);
    }
  );

  const minPasswordLength = 4;

  return (
    <Block safe flex space="evenly" center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <SeekQLogo />
      <HeaderSection headerText="Create your password"></HeaderSection>

      <View style={styles.passwordForm}>
        <View>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                label="Password"
                onChangeText={(value: string) => onChange(value)}
                color="primary"                
                borderless
                password
                viewPass
                textInputStyle={{
                  fontFamily: FontNames.CamptonSemiBold,
                  color: Colors.fontNormal,
                }}
              />
            )}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: minPasswordLength,
                message: `Enter at least ${minPasswordLength} characters`,
              },
            }}
            defaultValue=""
          />
          {errors.password && <Text>{errors.password.message}</Text>}
        </View>
        <View style={{ marginTop: 45 }}>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                label="Confirm password"
                onChangeText={(value: string) => onChange(value)}
                color="primary"                
                borderless
                password
                viewPass
                textInputStyle={{
                  fontFamily: FontNames.CamptonSemiBold,
                  color: Colors.fontNormal,
                }}
              />
            )}
            name="passwordConfirm"
            rules={{
              required: "Password confirm is required",
              minLength: {
                value: minPasswordLength,
                message: `Enter at least ${minPasswordLength} characters`,
              },
              validate: (value) => {
                return (
                  value === password.current ||
                  "Please make sure passwords match"
                );
              },
            }}
            defaultValue=""
          />
          {errors.passwordConfirm && (
            <Text>{errors.passwordConfirm.message}</Text>
          )}
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
    top: -30,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Layout.base,
  },
});

export default SignUpCreatePassword;
