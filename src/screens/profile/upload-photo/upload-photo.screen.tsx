import React from "react";
import { Colors, Icons, Images, Layout } from "../../../constants";
import { Text, Block, Card } from '../../../shared';

export interface IUPloadPhotoProps {

}

const UploadPhoto: React.FC<IUPloadPhotoProps> = ({

}) => {
  return (
    <Block flex style={{ paddingLeft: 5, padding: Layout.base * 2.3 }}>
      <Block flex>
        <Card
          full
          source={Images.UploadPhoto}
          icon={Icons.edit}
          iconColor={Colors.quaternary}
          iconSize={28}
          shadow
        />
      </Block>
      <Block flex style={{ backgroundColor: Colors.transparent, justifyContent: 'center' }}>
        <Text h3 center>Don’t worry, you can always change this later</Text>
      </Block>
    </Block>
  );
}

export default UploadPhoto;