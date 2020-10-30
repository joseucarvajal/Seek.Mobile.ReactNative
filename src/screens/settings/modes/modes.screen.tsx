import React, { useCallback } from 'react';
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
  const userId = '545DE66E-19AC-47D2-57F6-08D8715337D7';
  const {
    error,
    data,
    isLoading
  } = useGetUserModes(userId);

  const enableMode = useCallback((id) => {
    const { data: isEnable } = useEnableMode({ id });
    console.log(isEnable);
  }, [useEnableMode]);

  const disableMode = useCallback((id) => {
    const { data: isDisable } = useDisableMode({ id });
    console.log(isDisable);
  }, [useDisableMode]);
  
  const mappingData = () => {
    return data?.map(( mode: IMode, index: number ) => ({
      id: mode.idMode,
      title: mode.modeName, 
      type: 'toggle',
      color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 
      value: mode.active,
      action: function(active: boolean) {
        // if(active) {
        //   enableMode(mode.idMode);
        // } else {
        //   disableMode(mode.idMode);
        // }
        console.log(`${mode.modeName} active: ${active}`);
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
