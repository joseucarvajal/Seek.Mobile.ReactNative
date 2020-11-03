import React from 'react';
import { 
  Block,
  Menu,
  Spinner,
  DisplayError
} from '../../../shared';
import {
  IMode,
  useGetUserModes,
  useSetToggleMode
} from '../../../hooks/settings';
import { Colors } from '../../../constants';

export interface IModesProps {}

const Modes: React.FC<IModesProps> = () => {
  const {
    error,
    data,
    isLoading
  } = useGetUserModes();

  const { setToggleNotification } = useSetToggleMode();
  
  const mappingData = () => {
    return data?.map(( mode: IMode, index: number ) => ({
      id: mode.idMode,
      title: mode.modeName, 
      type: 'toggle',
      color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 
      value: mode.active,
      action: (active: boolean) => {
        setToggleNotification(mode.idMode, active);
      },
      block: `
        Amet minim mollit non deserunt ullamco
        est sit aliqua dolor do amet sint. Velit
        officia consequat duis enim velit mollit.
      `
    }));
  };

  return (
    <Block flex center>
      <Spinner visible={isLoading} />
      <DisplayError errorResponse={error} />
      <Menu items={mappingData()}/>
    </Block>
  );
};

export default Modes;
