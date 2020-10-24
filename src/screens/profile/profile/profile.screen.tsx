import React, { useState } from "react";
import Swiper from 'react-native-swiper';
import { Steper } from '../../../components/profile';
import { Colors, Layout } from "../../../constants";
import { Button, Text, Block } from '../../../shared';
import UploadPhoto from '../upload-photo/upload-photo.screen';
import EnterInfo from '../enter-info/enter-info.screen';
import EnterAdditionalInfo from '../enter-additional-info/enter-additional-info'
import SetInterest from '../set-interest/set-interest.screen'

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({

}) => {

  const [currentPage, setCurrentPage] = useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  return (
    <Block flex space='between' style={{ padding: Layout.base, backgroundColor: Colors.white }}>
      <Block style={{ backgroundColor: Colors.white }}>
        <Steper stepCount={4} currentPage={currentPage} onIndexChanged={(position: any) => onStepPress(position)} />
      </Block>
      <Block flex>
        {/* <Swiper
          index={currentPage}
          showsButtons={false}
          autoplay={false}
          showsPagination={false}
        >
          <Block flex center middle>
            <UploadPhoto />
          </Block>
          <Block flex center middle>
            <EnterInfo />
          </Block>
          <Block flex center middle>
            <EnterAdditionalInfo />
          </Block>
        </Swiper> */}
        <SetInterest />
        <Block row bottom>
          <Button type='gradient' shadow onPress={() => onStepPress(currentPage)}>
            <Text h2 bold color={Colors.white}>CONTINUE</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;