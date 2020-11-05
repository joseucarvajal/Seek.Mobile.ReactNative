import React from "react";
import { Colors, Icons, Images, Layout } from "../../../constants";
import { Text, Block, Card } from '../../../shared';
import { Camera } from '../../../components/profile';

export interface IUPloadPhotoProps {

}

const UploadPhoto: React.FC<IUPloadPhotoProps> = ({

}) => {

  const [photo, setPhoto] = React.useState(Images.UploadPhoto);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Block flex style={{ paddingLeft: 5, padding: Layout.base * 2.3 }}>
      <Block flex>
        <Card
          full
          source={photo}
          icon={Icons.edit}
          iconColor={Colors.quaternary}
          iconSize={28}
          shadow
          onPress={() => setModalVisible(true)}
        />
      </Block>
      <Block flex style={{ backgroundColor: Colors.transparent, justifyContent: 'center' }}>
        <Text h3 center>Don’t worry, you can always change this later</Text>
      </Block>
      <Camera
        visible={modalVisible}
        onCloseCamera={(visible: any) => setModalVisible(visible)}
      />
    </Block>
  );
}

export default UploadPhoto;