import React from 'react';
import ModesItems from '../../../constants/Modes';
import { Block, Menu } from '../../../shared';

const Modes: React.FC = () => {
  return (
    <Block flex center>
      <Menu items={ModesItems} />
    </Block>
  );
};

export default Modes;
