import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>SignUp screen nested</Text>
    </SafeAreaView>
  );
};

export default SignUp;
