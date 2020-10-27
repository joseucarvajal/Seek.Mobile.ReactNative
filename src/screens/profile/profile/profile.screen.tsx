import React from "react";
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

  const scrollRef: any = React.createRef()

  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const stepCount = 4;
  const buttonText = (currentPage != 3) ? 'CONTINUE' : 'START SEARCHING'

  const scrollToIndex = (position: number) => {
    setCurrentPage(position);
    scrollRef?.current?.scrollToIndex({ index: position });
  };

  const nextStep = () => {
    const nextPosition = currentPage + 1
    if (nextPosition < stepCount) {
      setCurrentPage(nextPosition)
    }
  };

  const MySwiper = React.forwardRef((props, ref) => {
    return (
      <Swiper ref={scrollRef} index={currentPage} onChangeIndex={(params: any) => setCurrentPage(params.index)} renderAll {...props}>
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
    )
  })


  return (
    <Block flex space='between' style={{ padding: Layout.base, backgroundColor: Colors.white }}>
      <Block style={{ backgroundColor: Colors.white }}>
        <Steper stepCount={stepCount} currentPage={currentPage} onIndexChanged={(position: any) => scrollToIndex(position)} />
      </Block>
      <Block flex>
        <MySwiper ref={scrollRef} />
        <Block row bottom>
          <Button type='gradient' shadow onPress={() => nextStep()}>
            <Text h2 bold color={Colors.white}>{buttonText}</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;