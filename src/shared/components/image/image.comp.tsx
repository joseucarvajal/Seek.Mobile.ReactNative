import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback, View, ImageResizeMode } from "react-native";
import { Layout, Colors, thumbMeasure } from '../../../constants'

export interface IImgProps {
  width?: any;
  style?: any;
  source?: any;
  onPress?: any;
  size?: SizeType;
  shadow?: any;
  resizeMode?: ImageResizeMode;
}

export type SizeType = "avatar" | "logo" | "small" | "full" | "background";

const Img: React.FC<IImgProps> = ({ 
  width,
  style,
  source,
  onPress,
  size,
  shadow,
  resizeMode
}) => {
  
  const ViewStyles = [
    size === 'avatar' && styles.avatarStyle,
    size === 'logo' && [styles.logoStyle, {flex: 0.1*(width/30)}],
    size === 'small' && styles.smallStyle,
    size === 'background' && styles.FullStyle,
    size === 'full' && styles.FullStyle,
    shadow && styles.shadow,
    style && style
  ];

  const ImageStyles = [
    size === 'avatar' && styles.avatarStyle,
    size === 'logo' && {width:`${width}%`, height:'100%'},
    size === 'small' && styles.smallStyle,
    size === 'background' && styles.FullStyle,
    size === 'full' && styles.FullStyle
  ];

  return(
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
    width: Layout.window.width - Layout.base * 12,
    height: Layout.window.width - Layout.base * 12,
    borderRadius: (Layout.window.width - Layout.base * 12) / 2,
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
    width: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  avatarStyle: {
    borderRadius: 50,
    width: thumbMeasure,
    height: thumbMeasure
  },
  FullStyle: {
    borderRadius: 50,
    borderWidth: 0,
    borderColor: Colors.white,
    width: thumbMeasure * 1.5,
    height: thumbMeasure * 1.5
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