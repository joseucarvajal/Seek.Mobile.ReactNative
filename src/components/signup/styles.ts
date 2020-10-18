import { StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";
import { Colors } from "../../constants";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  paragraphNormal: {
    fontFamily: Fonts.Campton,
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
