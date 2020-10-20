import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { 
  Button, 
  ButtonTertiary,
  Typography
} from "../../../shared";

import { 
  Colors,
  FontNames,
  getFontStyle, 
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

        <Typography p lineHeight={18} center>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Typography>

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
            iconSize={25}
            style={styles.socialButton}
            onPress={() => {
              navigation.navigate("SignUpPhone");
            }}
          >
            <Text>Use Email / Phone</Text>
          </ButtonTertiary>
        </View>

        <Typography p lineHeight={18} center>
          All your important details are secured. None of your information will
          be shared from our app!
        </Typography>

        <View>
          <Typography center style={styles.link}>By registering, you agree to</Typography>
          <Button
            type="text-link"
            onPress={() => {
              console.log("Terms of service");
            }}
          >
            <Typography underline style={styles.actionLink} small center>
              Out terms of service
            </Typography>
          </Button>
          <Text>
            <Button
              type="text-link"
              onPress={() => {
                console.log("Privacy Policy");
              }}
            >
              <Typography underline style={styles.actionLink} small center>
                Privacy Policy
              </Typography>
            </Button>
            <Button type="text-link">
              <Typography small style={styles.link}> and </Typography>
            </Button>
            <Button
              type="text-link"
              onPress={() => {
                console.log("Cookie Policy");
              }}
            >
              <Typography underline style={styles.actionLink} small center>
                Cookie Policy
              </Typography>
            </Button>
          </Text>
        </View>

        <Button 
          type="link"
          onPress={()=>{
            console.log('having trouble logging in?');
          }}
        >
          <Typography underline bold style={styles.linkButtonPrimary} fontSize={17} lineHeight={22}>
            Having trouble logging in?
          </Typography>
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
