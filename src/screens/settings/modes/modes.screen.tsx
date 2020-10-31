import React, { useState } from 'react';
import { 
  Block,
  Menu,
  Spinner,
  DisplayError
} from '../../../shared';
import {
  IMode,
  useGetUserModes,
  useEnableMode,
  useDisableMode
} from '../../../hooks/settings';
import { Colors } from '../../../constants';

export interface IModesProps {}

const Modes: React.FC<IModesProps> = () => {
  const [mode, setMode] = useState({ active: false, id: '' });
  const userId = '545DE66E-19AC-47D2-57F6-08D8715337D7';
  const {
    error,
    data,
    isLoading
  } = useGetUserModes(userId);

  const { error: isErrorE, data: dataEnableE, isLoading: isLoadingE, refetch: enabledMode } = useEnableMode({
    id: mode.id
  });

  const { error: isErrorD, data: dataEnableD, isLoading: isLoadingD, refetch: disableMode } = useDisableMode({
    id: mode.id
  });

  console.log('dataEnableE', dataEnableE);
  console.log('dataEnableD', dataEnableD);
  
  const mappingData = () => {
    return data?.map(( mode: IMode, index: number ) => ({
      id: mode.idMode,
      title: mode.modeName, 
      type: 'toggle',
      color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 
      value: mode.active,
      action: (active: boolean) => {
        setMode({ active, id: mode.idMode });
        if(active) {
          enabledMode();
          console.log('active enable', active);
        }
        else {
          disableMode();
          console.log('active disable', active);
        }
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
