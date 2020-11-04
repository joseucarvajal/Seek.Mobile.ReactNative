import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Steper, ModalBackground, ModalNoBackground } from '../../../components/profile';
import { Colors, Layout } from "../../../constants";
import { Block, Swiper, ButtonPrimary } from '../../../shared';
import UploadPhoto from '../upload-photo/upload-photo.screen';
import EnterInfo from '../enter-info/enter-info.screen';
import SetInterest from '../set-interest/set-interest.screen'

export interface IProfileProps { }

const Profile: React.FC<IProfileProps> = ({

}) => {
  const navigation = useNavigation();

  const scrollRef: any = React.createRef()

  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const stepCount = 3;
  const buttonText = (currentPage != (stepCount - 1)) ? 'CONTINUE' : 'START SEARCHING'

  const [modalVisibleBackground, setModalVisibleBackground] = React.useState(false);

  const scrollToIndex = (position: number) => {
    setCurrentPage(position);
    scrollRef?.current?.scrollToIndex({ index: position });
  };

  const nextStep = () => {
    const nextPosition = currentPage + 1
    if (nextPosition < stepCount) {
      setCurrentPage(nextPosition)
    }
    else {
      setModalVisibleBackground(!modalVisibleBackground)
    }
  };

  const MySwiper = React.forwardRef((props, ref) => {
    return (
      <Swiper ref={ref} index={currentPage} onChangeIndex={(params: any) => setCurrentPage(params.index)} renderAll {...props}>
        <Block flex style={{ width: Layout.window.width }}>
          <UploadPhoto />
        </Block>
        <Block flex style={{ width: Layout.window.width }}>
          <EnterInfo />
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
        <ButtonPrimary onPress={() => nextStep()}>
          {buttonText}
        </ButtonPrimary>
      </Block>
      <ModalBackground 
        visible={modalVisibleBackground} 
        onVisibleChange={(visible: any) => setModalVisibleBackground(visible)}
        onPress={() => navigation.navigate('EnterLocationInfo')}
      />
    </Block>
  );
};

export default Profile;