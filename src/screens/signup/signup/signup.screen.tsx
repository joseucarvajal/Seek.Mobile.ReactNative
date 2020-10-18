import React from "react";
import { StyleSheet, Image, View, Text as RNText } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as PaperButton } from 'react-native-paper';
import Fonts from "../../../constants/Fonts";
import { Button, Text } from "../../../shared";

import { Button as PButton } from 'react-native-paper';


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

        <Text type="Font16Line18">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <PButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </PButton>

        <View style={styles.socialButtonsGroup}>
          <Button color="tertiary" style={{ marginBottom: 10 }}>
            <Text type="TertiaryButton">Continue with Apple</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text type="TertiaryButton">Continue with Facebook</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text type="TertiaryButton">Continue with Google</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text type="TertiaryButton">Use Email/Phone</Text>
          </Button>
        </View>

        <Text type="Font16Line18">
          All your important details are secured. None of your information will
          be shared from our app!
        </Text>

        <View>
          <Text type="Font14Line16" style={{fontWeight:'500'}}>
            By registering, you agree to
          </Text>
          <Text type="Font14Line16">
            <Text type="Font14Line16" style={styles.actionLink}>Our Terms of Service</Text>
          </Text>
          <Text type="Font14Line16" style={styles.centeredText}>
            <Text type="Font14Line16" style={styles.actionLink}>Privacy Policy</Text>
            <Text type="Font14Line16"> and </Text>
            <Text type="Font14Line16" style={styles.actionLink}>Cookie Policy</Text>
          </Text>
        </View>

        <View>
          <PaperButton
            mode="text"
            uppercase={false}
            onPress={() => console.log("Pressed")}            
          >
            <RNText style={{
              fontFamily: Fonts.Campton,
              fontSize: 17,
              lineHeight: 22,
              color: '#1BBED8',
              fontWeight: '700',
              textDecorationLine: "underline",
            }}>
              Having trouble logging in?
            </RNText>
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
  centeredText: {
    textAlign: "center",
  },
  actionLink: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default SignUp;
