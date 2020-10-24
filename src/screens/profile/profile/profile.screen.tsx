import React from "react";
import Swiper from 'react-native-swiper';
import { Steper } from '../../../components/profile';
import { Colors, Layout } from "../../../constants";
import { Button, Text, Block } from '../../../shared';
import UploadPhoto from '../upload-photo/upload-photo.screen';
import EnterInfo from '../enter-info/enter-info.screen';
import EnterAdditionalInfo from '../enter-additional-info/enter-additional-info'

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({ }) => {

  const [currentPage, setCurrentPage] = React.useState<number>(0);

  return (
    <Block flex space='between' style={{ padding: Layout.base, backgroundColor: Colors.white }}>
      <Block style={{ backgroundColor: Colors.white }}>
        <Steper />
      </Block>
      <Block flex>
        {/* <Swiper
          loop={true}
          index={currentPage}
          autoplay={false}
          showsPagination={false}
          removeClippedSubviews={false}
          onIndexChanged={(page) => setCurrentPage(page)}
        >
          <UploadPhoto />
          <EnterInfo />
          <EnterAdditionalInfo />
        </Swiper> */}
        <EnterAdditionalInfo />
        <Block row bottom>
          <Button type='gradient' shadow>
            <Text h2 bold color={Colors.white}>CONTINUE</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;