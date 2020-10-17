import { Platform, StatusBar, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

export const isIOS = Platform.OS === 'ios' ? true : false
export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = 16 * 2.5;
export const thumbMeasure = (width - 48 - 32) / 7;

export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);

export function validateEmail(email: string) {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLocaleLowerCase())
}

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const removeNonNumber = (string = "") => string.replace(/[^\d]/g, "");

export const removeLeadingSpaces = (string = "") => string.replace(/^\s+/g, "");