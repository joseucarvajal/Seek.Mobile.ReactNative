import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button as PaperButton } from 'react-native-paper';
import FontNames from "../../../constants/Fonts";
import { 
  Button,  
} from "../../../shared";
import { getFontStyle } from '../../../constants';

import { 
  signUpStyles, 
  SeekQLogo 
} from "../../../components/signup/";
import signupStyles from "../../../components/signup/signup.styles";
import { useNavigation } from "@react-navigation/native";

export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = ({}) => {

  const navigation = useNavigation();


  
  const width = 45;
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>

      <SeekQLogo/>


        <Text style={signupStyles.normalCenteredParagraph}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>

        <View style={styles.socialButtonsGroup}>
          <Button color="tertiary" style={styles.socialButton}>
            <Text>Continue with Apple</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text>Continue with Facebook</Text>
          </Button>

          <Button color="tertiary" style={styles.socialButton}>
            <Text>Continue with Google</Text>
          </Button>

          <Button 
            color="tertiary" 
            style={styles.socialButton}
            onPress={()=>{
              navigation.navigate('SignUpPhone');
            }}
          >
            <Text>Use Email/Phone</Text>
          </Button>
        </View>

        <Text style={signupStyles.normalCenteredParagraph}>
          All your important details are secured. None of your information will
          be shared from our app!
        </Text>

        <View>
          <Text style={styles.smallCenteredText}>
            By registering, you agree to
          </Text>
          <Text style={styles.smallCenteredText}>
            <Text style={styles.actionLink}>Our Terms of Service</Text>
          </Text>
          <Text style={styles.smallCenteredText}>
            <Text style={styles.actionLink}>Privacy Policy</Text>
            <Text> and </Text>
            <Text style={styles.actionLink}>Cookie Policy</Text>
          </Text>
        </View>

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

export default SignUp;