import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import Colors from '../../../constants/Colors';

export interface IProfileProps {
  currentPage: number,
  stepCount: number;
  onIndexChanged?: any;
}

const Steper: React.FC<IProfileProps> = ({
  currentPage,
  stepCount,
  onIndexChanged,
}) => {
  const onStepPress = (position: number) => {
    onIndexChanged(position);
  };

  return (
    <StepIndicator
      stepCount={stepCount}
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