import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as PaperButton } from "react-native-paper";
import FontNames from "../../../constants/Fonts";
import { Button } from "../../../shared";
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
          <Button
            left
            type="social"
            icon="apple"
            iconColor={Colors.quaternary}
            iconSize={18}
          >
            <Typography>Continue with Facebook</Typography>
          </Button>
          <Button color="tertiary" style={styles.socialButton}>
            <Typography>Continue with Facebook</Typography>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Typography>Continue with Google</Typography>
          </Button>

          <Button
            color="tertiary"
            style={styles.socialButton}
            onPress={() => {
              navigation.navigate("SignUpPhone");
            }}
          >
            <Typography>Use Email / Phone</Typography>
          </Button>
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
