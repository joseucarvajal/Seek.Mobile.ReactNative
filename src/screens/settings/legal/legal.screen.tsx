import React from "react";
import { Block, Tabs } from "../../../shared";

export interface ILegalProps { }

const Legal: React.FC<ILegalProps> = ({ }) => {
  return (
    <Block flex>
      <Tabs initialIndex={'privacy'} />
    </Block>
  );
};

export default Legal;
