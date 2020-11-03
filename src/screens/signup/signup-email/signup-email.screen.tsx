import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, ButtonPrimary, LinkButton, Block } from "../../../shared";
import { Colors, FontNames } from "../../../constants";
import { HeaderSection, SeekQLogo } from "../../../components/signup/";

export interface ISignUpEmailProps { }

const SignUpEmail: React.FC<ISignUpEmailProps> = ({ }) => {
  const navigation = useNavigation();

  return (
    <Block safe flex>

      <Block flex center middle>
        <SeekQLogo />
      </Block>

      <Block flex>
        <HeaderSection headerText="Wellcome back!">
          <Text center light p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        </HeaderSection>
      </Block>

      <Block flex={2} row center middle>
        <Block flex>
          <Input
            label='Enter Email'
            color="primary"
            borderless
            textInputStyle={{
              fontFamily: FontNames.CamptonSemiBold,
              color: Colors.fontNormal,
            }}
          />
        </Block>
      </Block>

      <Block flex center middle space='evenly'>
        <ButtonPrimary onPress={() => navigation.navigate("SignUpVerificationCode")}>CONTINUE</ButtonPrimary>
        <LinkButton underline onPress={() => navigation.navigate("SignUpPhone")}>Continue using phone Instead</LinkButton>
      </Block>
    </Block>
  );
};

export default SignUpEmail;