import React from "react";
import { PickerItemProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Text, Select, Input, ButtonPrimary, LinkButton, Block, Spinner, DisplayError } from "../../../shared";
import { Colors, FontNames, Layout } from "../../../constants";
import { SeekQLogo, HeaderSection } from "../../../components/signup/";
import { useSendVerificationCode } from "../../../hooks/signup";

export interface ISignUpPhoneProps { }

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({ }) => {

  //console.disableYellowBox = true;
  
  const navigation = useNavigation();

  type TFormData = {
    phoneIndicative: PickerItemProps;
    phoneNumber: string;
  };
  const { control, handleSubmit, errors, getValues } = useForm<TFormData>();
  const onSubmit = handleSubmit(({ phoneNumber, phoneIndicative }) => {
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
    <Block safe flex>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />

      <Block flex center middle>
        <SeekQLogo />
      </Block>

      <Block flex>
        <HeaderSection headerText="Welcome">
          <Text center light p>By registering, you agree to Our terms of Service, Privacy Policy and Cookie Policy</Text>
        </HeaderSection>
      </Block>

      <Block flex row order={1}>
        <Block flex>
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
                defaultValue={indicativeItems[1].value}
                style={{ width: 'auto' }}
              />
            )}
            name="phoneIndicative"
            rules={{ required: true }}
            defaultValue={indicativeItems[1]}
          ></Controller>
        </Block>
        <Block flex={3} paddingLeft={Layout.base} paddingTop={Layout.input_vertical_label * 1.8}>
          <Text fontSize={12} color={Colors.fontSoft1}></Text>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                onChangeText={(value: string) => onChange(value)}
                color="primary"
                keyboardType="phone-pad"
                borderless
                textInputStyle={{ fontFamily: FontNames.CamptonSemiBold, color: Colors.fontNormal }}
                style={{ width: 'auto' }}
              />
            )}
            name="phoneNumber"
            rules={{ required: true, minLength: 4 }}
            defaultValue=""
          />
          {errors.phoneNumber && <Text>Enter a valid phone number</Text>}
        </Block>
      </Block>

      <Block flex center middle space='evenly'>
        <ButtonPrimary onPress={() => onSubmit()}>CONTINUE</ButtonPrimary>
        <LinkButton underline onPress={() => navigation.navigate("SignUpEmail")}>Continue using email Instead</LinkButton>
      </Block>
    </Block>
  );
};

export default SignUpPhone;