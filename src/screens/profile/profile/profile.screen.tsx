import React, { useState } from "react";
import { ScrollView } from 'react-native'
import { Steper } from '../../../components/profile';
import { Colors, Layout } from "../../../constants";
import { Button, Text, Block, Swiper } from '../../../shared';
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

  const buttonText = (currentPage != 3) ? 'CONTINUE' : 'START SEARCHING'

  return (
    <Block flex space='between' style={{ padding: Layout.base, backgroundColor: Colors.white }}>
      <Block style={{ backgroundColor: Colors.white }}>
        <Steper stepCount={4} currentPage={currentPage} onIndexChanged={(position: any) => onStepPress(position)} />
      </Block>
      <Block flex>
        <Swiper pagination onPageChange={(position: any) => onStepPress(position)}>
          <Block flex style={{ width: Layout.window.width }}>
            <UploadPhoto />
          </Block>
          <Block flex style={{ width: Layout.window.width }}>
            <EnterInfo />
          </Block>
          <Block flex style={{ width: Layout.window.width }}>
            <EnterAdditionalInfo />
          </Block>
          <Block flex style={{ width: Layout.window.width }}>
            <SetInterest />
          </Block>
        </Swiper>
        <Block row bottom>
          <Button type='gradient' shadow onPress={() => onStepPress(currentPage)}>
            <Text h2 bold color={Colors.white}>{buttonText}</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;