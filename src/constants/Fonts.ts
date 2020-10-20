import { StyleSheet, TextStyle } from "react-native";
import Colors from "./Colors";

type TFontNames = {
  Campton: string;
  CamptonBlack: string;
  CamptonBlackItalic: string;
  CamptonBold: string;
  CamptonBoldItalic: string;
  CamptonBook: string;
  CamptonBookItalic: string;
  CamptonExtraBold: string;
  CamptonExtraBoldItalic: string;
  CamptonExtraLight: string;
  CamptonExtraLightItalic: string;
  CamptonLight: string;
  CamptonLightItalic: string;
  CamptonMedium: string;
  CamptonMediumItalic: string;
  CamptonSemiBold: string;
  CamptonSemiBoldItalic: string;
  CamptonThin: string;
  CamptonThinItalic: string;
  SeekQIcons: string;
};

export const FontNames: TFontNames = {
  Campton: "Campton",
  CamptonBlack: "Campton-Black",
  CamptonBlackItalic: "Campton-BlackItalic",
  CamptonBold: "Campton-Bold",
  CamptonBoldItalic: "Campton-BoldItalic",
  CamptonBook: "Campton-Book",
  CamptonBookItalic: "Campton-BookItalic",
  CamptonExtraBold: "Campton-ExtraBold",
  CamptonExtraBoldItalic: "Campton-ExtraBoldItalic",
  CamptonExtraLight: "Campton-ExtraLight",
  CamptonExtraLightItalic: "Campton-ExtraLightItalic",
  CamptonLight: "Campton-Light",
  CamptonLightItalic: "Campton-LightItalic",
  CamptonMedium: "Campton-Medium",
  CamptonMediumItalic: "Campton-MediumItalic",
  CamptonSemiBold: "Campton-SemiBold",
  CamptonSemiBoldItalic: "Campton-SemiBoldItalic",
  CamptonThin: "Campton-Thin",
  CamptonThinItalic: "Campton-ThinItalic",
  SeekQIcons: "seekqicons",
};

const fontStyles = StyleSheet.create({
  text: {
    fontFamily: FontNames.Campton,
    color: Colors.fontNormal,
  },
  font28Line22: {
    fontSize: 28,
    lineHeight: 22,
  },
  font28Line22Centered: {
    fontSize: 28,
    lineHeight: 22,
    textAlign: "center",
  },
  font28Line22CenteredBold: {
    fontSize: 28,
    lineHeight: 22,
    textAlign: "center",
    fontWeight: "bold"
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

const font28Line22 = "font28Line22";
const font28Line22Centered = "font28Line22Centered";
const font28Line22CenteredBold = "font28Line22CenteredBold";

const font16Line18 = "font16Line18";
const font16Line18Centered = "font16Line18Centered";

const font14Line16 = "font14Line16";
const font14Line16Centered = "font14Line16Centered";

const tertiaryButton = "tertiaryButton";
const heading1 = "heading1";

export type FontType = 
  | typeof font28Line22
  | typeof font28Line22Centered
  | typeof font28Line22CenteredBold
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
  
  [font28Line22]: fontStyles.font28Line22,
  [font28Line22Centered]: fontStyles.font28Line22Centered,
  [font28Line22CenteredBold]: fontStyles.font28Line22CenteredBold,

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
