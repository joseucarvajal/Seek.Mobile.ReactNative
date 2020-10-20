import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { 
  Button, 
  ButtonTertiary,
  Text,
  Icon
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

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = ({}) => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>

        <SeekQLogo />

        <Text p lineHeight={18} center>
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
            customIcon={Icons.settings}
            customIconSize={50}
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
          <Text center style={styles.link}>By registering, you agree to</Text>
          <Button
            type="text-link"
            onPress={() => {
              console.log("Terms of service");
            }}
          >
            <Text underline style={styles.actionLink} small center>
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
              <Text underline style={styles.actionLink} small center>
                Privacy Policy
              </Text>
            </Button>
            <Button type="text-link">
              <Text small style={styles.link}> and </Text>
            </Button>
            <Button
              type="text-link"
              onPress={() => {
                console.log("Cookie Policy");
              }}
            >
              <Text underline style={styles.actionLink} small center>
                Cookie Policy
              </Text>
            </Button>
          </Text>
        </View>

        <Button 
          type="link"
          onPress={()=>{
            console.log('having trouble logging in?');
          }}
        >
          <Text underline bold style={styles.linkButtonPrimary} fontSize={17} lineHeight={22}>
            Having trouble logging in?
          </Text>
        </Button>
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
  link:{
    color: Colors.fontSoft
  },
  actionLink: {
    fontFamily: FontNames.CamptonSemiBoldItalic,
    color: Colors.fontSoft,
    margin: 0,
  },
  linkButtonPrimary: {    
    color: Colors.primary,
  }  
});

export default SignUp;
