import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import Colors from '../../../constants/Colors';

export interface IProfileProps {
  viewPagerOne?: any;
  viewPagerTwo?: any;
  viewPagerThree?: any;
}

const Steper: React.FC<IProfileProps> = ({ }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  return (
    <StepIndicator
      stepCount={4}
      customStyles={indicatorStyles}
      currentPosition={currentPage}
      onPress={onStepPress}
    />
  );
}

export default Steper;

const indicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Colors.secondary,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: Colors.secondary,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: Colors.secondary,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: Colors.secondary,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: Colors.secondary
};