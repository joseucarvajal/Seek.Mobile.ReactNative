import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonTertiary, Text, LinkButton, Block } from "../../../shared";
import { SeekQLogo } from "../../../components/signup/";
import { Layout } from "../../../constants";

export interface ISignUpProps { }

const SignUp: React.FC<ISignUpProps> = ({ }) => {

  const navigation = useNavigation();

  return (
    <Block safe flex>

      <Block flex center middle>
        <SeekQLogo />
      </Block>

      <Block flex={3} center middle space='evenly'>
        <ButtonTertiary icon="apple" onPress={() => navigation.navigate("SignUpPhone")}>
          Continue with Apple
        </ButtonTertiary>
        <ButtonTertiary icon="facebook" onPress={() => navigation.navigate("SignUpPhone")}>
          Continue with Facebook
        </ButtonTertiary>
        <ButtonTertiary icon="google" onPress={() => navigation.navigate("SignUpPhone")}>
          Continue with Google
        </ButtonTertiary>
        <ButtonTertiary icon="mobile" iconSize={28} onPress={() => navigation.navigate("SignUpPhone")}>
          Use Email / Phone
        </ButtonTertiary>
      </Block>
      
      <Text small boldItalic center onPress={() => console.log("Already have an Account")}>Already have an Account</Text>
      
      <Block flex row center middle wrap padding={Layout.base} paddingTop={Layout.base * 2}>
        <Text small light>By registering, you agree to</Text>
        <Text small mediumItalic onPress={() => navigation.navigate("Legal")}>Our terms of service, </Text>
        <Text small mediumItalic onPress={() => navigation.navigate("Legal")}>Privacy Policy</Text>
        <Text small light> and </Text>
        <Text small mediumItalic onPress={() => navigation.navigate("Legal")}>Cookie Policy</Text>
      </Block>

      <Block center middle>
        <LinkButton>Having trouble logging in?</LinkButton>
      </Block>

    </Block>
  );
};

export default SignUp;