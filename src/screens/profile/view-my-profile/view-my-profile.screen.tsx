import React from "react";
import { ScrollView } from 'react-native'
import { Colors, Icons, Images, Layout } from "../../../constants";
import { Text, Block, Card, Swiper, Image } from '../../../shared';

export interface IMyProfileProps {

}

const MyProfile: React.FC<IMyProfileProps> = ({

}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  return (
    <Block>
      <ScrollView>
        <Block flex>
          <Swiper
            index={currentPage}
            showPaginationTop
            onChangeIndex={(params: any) => setCurrentPage(params.index)}
            style={{ height: Layout.window.height * .6 }}
          >
            {images.map((image, index) =>
              <Block>
                <Card
                  key={index}
                  source={{ uri: image }}
                  icon={Icons.edit}
                  iconColor={Colors.quaternary}
                  iconSize={28}
                  borderless
                  horizontal
                  shadowIcon
                />
              </Block>
            )}
          </Swiper>
        </Block>
        <Block flex>
          <Block>
            <Card
              shadow
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

export default MyProfile;

const images = [
  'https://loremflickr.com/375/466/dog',
  'https://loremflickr.com/375/466/paris',
  'https://loremflickr.com/375/466/rio',
  'https://loremflickr.com/375/466/girl',
  'https://loremflickr.com/375/466/brazil',
  'https://loremflickr.com/375/466/all'
]