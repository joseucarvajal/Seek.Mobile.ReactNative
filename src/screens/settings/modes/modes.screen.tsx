import React from 'react';
import { 
  Block,
  Menu,
  Spinner,
  DisplayError
} from '../../../shared';
import {
  useGetUserModes,
  useToggleMode
} from '../../../hooks/settings';
import { Colors } from '../../../constants';

export interface IModesProps {}

const Modes: React.FC<IModesProps> = () => {
  const {
    error,
    data,
    isLoading
  } = useGetUserModes();

  const { setToggleNotification } = useToggleMode();
  
  const mappingData = () => {
    let mapped: any = [];
    let index = 0;
    
    for (let [key, value] of Object(data) ) {
      const { idMode, modeTypeName, active } = value;
      mapped.push({
        id: idMode, 	
        title: modeTypeName, 	
        type: 'toggle', 	
        color: ((index+1) % 2 === 0) ? Colors.menuItemEven : Colors.white, 	
        value: active,	
        action: (active: boolean) => {	
          setToggleNotification(idMode, active);
        },
        block: `
          Amet minim mollit non deserunt ullamco
          est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit.
        `
      });
      index++;
    }

    return mapped;
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
