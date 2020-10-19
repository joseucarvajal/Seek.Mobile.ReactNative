import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as PaperButton } from 'react-native-paper';
import FontNames from "../../../constants/Fonts";
import { Button } from "../../../shared";
import { getFontStyle } from '../../../constants';

import { 
  signUpStyles, 
  SeekQLogo 
} from "../../../components/signup/";
import signupStyles from "../../../components/signup/signup.styles";
import { useNavigation } from "@react-navigation/native";

export interface ISignUpPhoneProps {}

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>

        <SeekQLogo/>

        <Text style={signupStyles.heading1}>
          Wellcome back
        </Text>

        <Text style={signupStyles.normalCenteredParagraph}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View>
          <PaperButton
            mode="text"
            uppercase={false}
            onPress={() => console.log("Pressed")}            
          >
            <Text style={{
              fontFamily: FontNames.Campton,
              fontSize: 17,
              lineHeight: 22,
              color: '#1BBED8',
              fontWeight: '700',
              textDecorationLine: "underline",
            }}>
              Having trouble logging in?
            </Text>
          </PaperButton>          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({  
  socialButtonsGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  socialButton: {
    ...getFontStyle('tertiaryButton'),
    marginVertical: 10,
  },
  smallCenteredText:  { 
    ...getFontStyle('font14Line16Centered'),
    letterSpacing: 0.24
  },
  actionLink: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default SignUpPhone;