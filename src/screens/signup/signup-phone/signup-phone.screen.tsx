import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DropDownPicker from 'react-native-dropdown-picker';


import { useNavigation } from "@react-navigation/native";

import {
  Button,
  ButtonTertiary,
  Typography,
  Select,
  Input,
} from "../../../shared";

import { Colors, FontNames, getFontStyle } from "../../../constants";

import { signUpStyles, SeekQLogo } from "../../../components/signup/";

export interface ISignUpPhoneProps {}

const SignUpPhone: React.FC<ISignUpPhoneProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={signUpStyles.screenContainer}>
        <SeekQLogo />

        <Typography
          h1
          center
          fontFamily={FontNames.CamptonSemiBold}
          letterSpacing={-0.408}
        >
          Wellcome back!
        </Typography>

        <Typography p lineHeight={18} center>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Typography>

        <View style={styles.phoneForm}>
          <Select
            defaultValue={"1"}
            items={[{ label: "1", value: "1" }]}    
            style={styles.phoneIndicative}
          />
          <Input color="quaternary" style={styles.phoneNumber} />
        </View>

        <Button
          type="link"
          onPress={() => {
            console.log("having trouble logging in?");
          }}
        >
          <Typography
            underline
            bold
            style={styles.linkButtonPrimary}
            fontSize={17}
            lineHeight={22}
          >
            Continue using email Instead
          </Typography>
        </Button>

        <Button type="link">
          <Typography color={Colors.primary}>LOGIN</Typography>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  phoneForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20    
  },
  phoneIndicative:{
    width: '20%'
  },
  phoneNumber:{
    width: '80%',
    right: -10
  },
  linkButtonPrimary: {
    color: Colors.primary,
  },
});

export default SignUpPhone;
