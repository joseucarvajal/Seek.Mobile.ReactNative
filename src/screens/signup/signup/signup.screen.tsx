import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as PaperButton } from 'react-native-paper';
import Fonts from "../../../constants/Fonts";
import { Button } from "../../../shared";

import { 
  signUpStyles, 
  SeekQLogo 
} from "../../../components/signup/";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>

        <SeekQLogo/>

        <Text style={[signUpStyles.paragraphNormal]}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.socialButtonsGroup}>
          <Button color="tertiary" style={{ marginBottom: 10 }}>
            <Text>Continue with Apple</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text>Continue with Facebook</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text>Continue with Google</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text>Use Email/Phone</Text>
          </Button>
        </View>

        <Text style={[signUpStyles.paragraphNormal]}>
          All your important details are secured. None of your information will
          be shared from our app!
        </Text>

        <View>
          <Text style={styles.smallCenteredText}>
            By registering, you agree to
          </Text>
          <Text style={[styles.smallCenteredText]}>
            <Text style={[styles.actionLink]}>Our Terms of Service</Text>
          </Text>
          <Text style={[styles.smallCenteredText]}>
            <Text style={[styles.actionLink]}>Privacy Policy</Text>
            <Text> and </Text>
            <Text style={[styles.actionLink]}>Cookie Policy</Text>
          </Text>
        </View>

        <View>
          <PaperButton
            mode="text"
            uppercase={false}
            onPress={() => console.log("Pressed")}            
          >
            <Text style={{
              fontFamily: Fonts.Campton,
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
    marginVertical: 10,
  },
  smallCenteredText: {
    fontFamily: Fonts.Campton,
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  actionLink: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default SignUp;