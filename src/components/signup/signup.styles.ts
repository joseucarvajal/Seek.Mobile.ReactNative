import { StyleSheet } from "react-native";
import FontNames, { getFontStyle } from "../../constants/Fonts";
import { Colors } from "../../constants";

export default StyleSheet.create({
  normalCenteredParagraph: getFontStyle('font14Line16Centered'),
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  heading1: { 
    ... getFontStyle('font28Line22CenteredBold'), 
  },
  logoImage: {
    height: 150,
    width: 200,
  },
});
