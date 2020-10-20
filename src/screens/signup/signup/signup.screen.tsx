import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as PaperButton } from "react-native-paper";
import FontNames from "../../../constants/Fonts";
import { Button, ButtonTertiary } from "../../../shared";
import { getFontStyle, Colors } from "../../../constants";

import { signUpStyles, SeekQLogo } from "../../../components/signup/";
import signupStyles from "../../../components/signup/signup.styles";
import { useNavigation } from "@react-navigation/native";
import Typography from "../../../shared/components/text/text.comp";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = ({}) => {
  const navigation = useNavigation();
  const width = 45;

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
            style={styles.socialButton}
            onPress={()=>{
              navigation.navigate('SignUpPhone');
            }}
          >
            <Text>Use Email / Phone</Text>
          </ButtonTertiary>
        </View>

        <Typography p lineHeight={18} center>
          All your important details are secured. None of your information will
          be shared from our app!
        </Typography>
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
  smallCenteredText: {
    ...getFontStyle("font14Line16Centered"),
    letterSpacing: 0.24,
  },
  actionLink: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default SignUp;
