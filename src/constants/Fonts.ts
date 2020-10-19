import { StyleSheet, TextStyle } from "react-native";
import Colors from "./Colors";

const FontNames: any = {
  Campton: "Campton",
};

const fontStyles = StyleSheet.create({
  text: {
    fontFamily: FontNames.Campton,
    color: Colors.fontNormal,
  },
  font16Line18: {
    fontSize: 16,
    lineHeight: 18,
  },
  font16Line18Centered: {
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
  },
  font14Line16: {
    fontSize: 14,
    lineHeight: 16,
  },
  font14Line16Centered: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  tertiaryButton: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
  },
  heading1: {
    fontSize: 28,
    lineHeight: 22,
    fontWeight: "500",
  },
});

const font16Line18 = "font16Line18";
const font16Line18Centered = "font16Line18Centered";

const font14Line16 = "font14Line16";
const font14Line16Centered = "font14Line16Centered";

const tertiaryButton = "tertiaryButton";
const heading1 = "heading1";

export type FontType =
  | typeof font16Line18
  | typeof font16Line18Centered
  | typeof font14Line16
  | typeof font14Line16Centered
  | typeof tertiaryButton
  | typeof heading1;

interface IStyleDefinition {
  [id: string]: TextStyle;
}

const stylesDefinition: IStyleDefinition = {
  [font16Line18]: fontStyles.font16Line18,
  [font16Line18Centered]: fontStyles.font16Line18Centered,
  [font14Line16]: fontStyles.font14Line16,
  [font14Line16Centered]: fontStyles.font14Line16Centered,
  [tertiaryButton]: fontStyles.font14Line16,
  [heading1]: fontStyles.heading1,
};

const getCompleteFontStyle = (fontType: FontType): TextStyle => {
  return { ...fontStyles.text, ...stylesDefinition[fontType.toString()] };
};

export const getFontStyle = (
  fontType: FontType,
  extensionStyle?: TextStyle
) => {
  return { ...getCompleteFontStyle(fontType), ...extensionStyle };
};

export default FontNames;
