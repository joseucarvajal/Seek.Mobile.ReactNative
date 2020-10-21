import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { 
  Button, 
  ButtonTertiary,
  Text,
  Icon,
  LinkButton
} from "../../../shared";

import { 
  Colors,
  FontNames,
  getFontStyle,
  Icons, 
} from "../../../constants";

import { 
  signUpStyles, 
  SeekQLogo 
} from "../../../components/signup/";
import { getCustomTabsSupportingBrowsersAsync } from "expo-web-browser";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = ({}) => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>

        <SeekQLogo />

        <Text p center>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.socialButtonsGroup}>
          <ButtonTertiary icon="apple" style={styles.socialButton}>
            <Text>Continue with Apple</Text>
          </ButtonTertiary>
          <ButtonTertiary icon="facebook" style={styles.socialButton}>
            <Text>Continue with Facebook</Text>
          </ButtonTertiary>
          <ButtonTertiary icon="google" style={styles.socialButton}>
            <Text>Continue with Google</Text>
          </ButtonTertiary>
          <ButtonTertiary
            icon="mobile"                        
            iconSize={28}
            style={styles.socialButton}
            onPress={() => {
              navigation.navigate("SignUpPhone");
            }}
          >
            <Text>Use Email / Phone</Text>
          </ButtonTertiary>
        </View>

        <Text p lineHeight={18} center>
          All your important details are secured. None of your information will
          be shared from our app!
        </Text>

        <View>
          <Text center style={styles.smallText}>By registering, you agree to</Text>
          <Button
            type="text-link"
            onPress={() => {
              console.log("Terms of service");
            }}
          >
            <Text underline style={styles.smallActionLink} small center>
              Out terms of service
            </Text>
          </Button>
          <Text>
            <Button
              type="text-link"
              onPress={() => {
                console.log("Privacy Policy");
              }}
            >
              <Text underline style={styles.smallActionLink} small center>
                Privacy Policy
              </Text>
            </Button>
            <Button type="text-link">
              <Text small style={styles.smallText}> and </Text>
            </Button>
            <Button
              type="text-link"
              onPress={() => {
                console.log("Cookie Policy");
              }}
            >
              <Text underline style={styles.smallActionLink} small center>
                Cookie Policy
              </Text>
            </Button>
          </Text>
        </View>

        <LinkButton>
          Having trouble logging in?
        </LinkButton>

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
    ...getFontStyle("tertiaryButton"),
    marginVertical: 10,
  },
  smallText:{
    fontFamily: FontNames.CamptonLight,
    fontSize: 14
  },
  smallActionLink: {
    fontFamily: FontNames.CamptonMediumItalic,
    fontSize: 14,
    margin: 0,
  },
  linkButtonPrimary: {    
    color: Colors.primaryFont,
    fontFamily: FontNames.CamptonBold,
    fontSize: 17
  }  
});

export default SignUp;
