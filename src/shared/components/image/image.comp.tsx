import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback, View, ImageResizeMode } from "react-native";
import { Layout, Colors, thumbMeasure } from '../../../constants'

export interface IImgProps {
  source: any;
  width?: any;
  style?: any;
  onPress?: any;
  size?: SizeType;
  shadow?: any;
  resizeMode?: ImageResizeMode;
  round?: boolean;
}

export type SizeType = "avatar" | "logo" | "small" | "full" | "background";

const Img: React.FC<IImgProps> = ({
  source,
  width,
  style,
  onPress,
  size,
  shadow,
  resizeMode,
  round
}) => {

  const ViewStyles = [
    size === 'avatar' && styles.avatarStyle,
    size === 'logo' && styles.logoStyle,
    size === 'small' && styles.smallStyle,
    size === 'background' && styles.FullStyle,
    size === 'full' && styles.FullStyle,
    shadow && styles.shadow,
    style && style
  ];

  const ImageStyles = [
    size === 'avatar' && styles.avatarStyle,
    size === 'logo' && styles.logoStyle,
    size === 'small' && styles.smallStyle,
    size === 'background' && styles.FullStyle,
    size === 'full' && styles.FullStyle,
    round && styles.round,
  ];

  return (
    <View style={[ViewStyles, shadow && styles.shadow]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={source}
          resizeMode={resizeMode}
          style={ImageStyles}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Img;

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
    marginLeft: Layout.base,
  },
  round: {
    width: 104,
    height: 104,
    borderRadius: 50,
  },
  raised: {
    width: Layout.window.width - Layout.base * 12,
    height: Layout.window.width - Layout.base * 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  smallStyle: {
    backgroundColor: Colors.white,
    width: thumbMeasure * 1.3,
    height: thumbMeasure * 1.3,
    borderRadius: 50,
  },
  logoStyle: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarStyle: {
    borderRadius: 50,
    width: thumbMeasure,
    height: thumbMeasure
  },
  FullStyle: {
    borderColor: Colors.white,
    width: Layout.window.width,
    height: Layout.window.height * .4
  },
  shadow: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
    marginBottom: 5
  }
});