import React from 'react';
import ModesItems from '../../../constants/Modes';
import { Block, Menu } from '../../../shared';

const modes: React.FC = () => {
  return (
    <Block flex center>
      <Menu items={ModesItems} />
    </Block>
  );
};

export default modes;
