import React from "react";
import { Colors, Images, Layout } from "../../../constants";
import { Text, Block, Card } from '../../../shared';

export interface IUPloadPhotoProps {

}

const UploadPhoto: React.FC<IUPloadPhotoProps> = ({ 

}) => {
  return (
    <Block flex>
      <Block flex>
        <Card
          full
          item={{ image: Images.UploadPhoto }}
          icon="edit_1"
          iconColor={Colors.quaternary}
          iconSize={28}
        />
      </Block>
      <Block flex style={{ paddingTop: Layout.base * 2, backgroundColor: Colors.transparent, justifyContent: 'center' }}>
        <Text h3 center>Don’t worry, you can always change this later</Text>
      </Block>
    </Block>
  );
}

export default UploadPhoto;