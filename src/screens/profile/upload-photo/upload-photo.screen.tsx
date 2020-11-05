import React from "react";
import { Image } from 'react-native'
import { Colors, Icons, Images, Layout } from "../../../constants";
import { Text, Block, Card } from '../../../shared';
import { Camera } from '../../../components/profile';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export interface IUPloadPhotoProps {

}

const UploadPhoto: React.FC<IUPloadPhotoProps> = ({

}) => {

  const [photo, setPhoto] = React.useState(Images.UploadPhoto);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [resizeMode, setResizeMode] = React.useState('contain');

  const setProfilePhoto = (params: any) => {
    params && setPhoto({ uri: params.uri })
    params && setResizeMode('cover')
    setModalVisible(false)
  }

  return (
    <Block flex style={{ paddingLeft: 5, padding: Layout.base * 2.3 }}>
      <Block flex>
        <Card
          full
          icon={Icons.edit}
          iconColor={Colors.quaternary}
          iconSize={28}
          shadow
          cardContent={
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
              <Block center>
                <Image
                  resizeMode={resizeMode === 'contain' ? 'contain' : 'cover'}
                  source={photo}
                  style={resizeMode === 'contain' ? { height: 330 } : { height: 330, width: '100%' }}
                />
              </Block>
            </TouchableWithoutFeedback>
          }
        />
      </Block>
      <Block flex style={{ backgroundColor: Colors.transparent, justifyContent: 'center' }}>
        <Text h3 center>Don’t worry, you can always change this later</Text>
      </Block>
      <Camera
        visible={modalVisible}
        onCloseCamera={(params: any) => setProfilePhoto(params)}
      />
    </Block>
  );
}

export default UploadPhoto;