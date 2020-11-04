import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, ButtonPrimary, LinkButton, Block, Spinner, DisplayError } from "../../../shared";
import { Colors, FontNames } from "../../../constants";
import { HeaderSection, SeekQLogo } from "../../../components/signup/";
import { useSendVerificationCode } from "../../../hooks/signup";
import { useForm, Controller } from "react-hook-form";

export interface ISignUpEmailProps {}

const SignUpEmail: React.FC<ISignUpEmailProps> = ({}) => {
  const navigation = useNavigation();

  type TFormData = {
    email: string;
  };
  const { control, handleSubmit, errors, getValues } = useForm<TFormData>();
  const onSubmit = handleSubmit(({ email }) => {
    sendVerificationCode();
  });

  const {
    error,
    isLoading,
    refetch: sendVerificationCode,
  } = useSendVerificationCode(`${getValues().email}`);

  return (
    <Block safe flex>
      
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <Block flex center middle>
        <SeekQLogo />
      </Block>

      <Block flex>
        <HeaderSection headerText="Welcome">
          <Text center light p>
            By registering, you agree to Our terms of Service, Privacy Policy
            and Cookie Policy
          </Text>
        </HeaderSection>
      </Block>

      <Block flex row>
        <Block flex>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                label="Enter Email"
                onChangeText={(value: string) => onChange(value)}
                color="primary"
                keyboardType="email-address"
                borderless
                textInputStyle={{
                  fontFamily: FontNames.CamptonSemiBold,
                  color: Colors.fontNormal,
                }}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          ></Controller>
        </Block>
      </Block>

      <Block flex center middle space='evenly'>
        <ButtonPrimary onPress={() => onSubmit()}>CONTINUE</ButtonPrimary>
        <LinkButton underline onPress={() => navigation.navigate("SignUpPhone")}>Continue using phone Instead</LinkButton>
      </Block>

    </Block>
  );
};

export default SignUpEmail;
