import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonPrimarySvg from '../../../../assets/images/buttonPrimary.svg';
import ButtonSecondarySvg from '../../../../assets/images/buttonSecondary.svg';

import Fonts from '../../../constants/Fonts';

export interface ISignUpProps {}


const SignUp: React.FC<ISignUpProps> = ({}) => {
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <View>
        <Image source={require("../../../../assets/images/seekqlogo.png")} />
      </View>

      <Text style={{fontFamily:Fonts.Campton, color:'#252525', fontSize:16, lineHeight:18}}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit 1 2 3 4.
      </Text>

      <Button
        icon="apple"
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </Button>

      <Button
        icon="cellphone-settings-variant"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
          User Email / Phone          
      </Button>

      <ButtonPrimarySvg/>      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    display: "flex",
    flexDirection: "row",    
  },
  buttonText: {
    alignSelf: 'stretch',
    backgroundColor: 'red',
    textAlign: "center",
    color: "white",
    height: "100%",
    width: "100%",
    left: 200
  },
  buttonIcon: {
    transform: [{ rotate: "180deg" }],
    width: 25,
    height: 25,
    position: "absolute",
    left: 2, // Keep some space between your left border and Image
  },
});

export default SignUp;
