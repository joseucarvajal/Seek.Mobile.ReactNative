import { StyleSheet } from "react-native";
import FontNames, { getFontStyle } from "../../constants/Fonts";
import { Colors } from "../../constants";

export default StyleSheet.create({
  normalCenteredParagraph: getFontStyle('font16Line18Centered'),
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  paragraphNormal: {
    fontFamily: FontNames.Campton,
    color: Colors.fontNormal,
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
  logoImage: {
    width: 150,
    height: 55,
  },
});
