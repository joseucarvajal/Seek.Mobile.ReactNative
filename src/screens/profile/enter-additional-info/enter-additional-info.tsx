import React from "react";
import { Colors, Layout } from "../../../constants";
import { Select, Block, Calendar, Text, ToggleButton } from '../../../shared';

export interface IUPloadPhotoProps {

}

const EnterAddionalInfo: React.FC<IUPloadPhotoProps> = ({

}) => {
  return (
    <Block flex>
      <Block right style={{ paddingTop: Layout.base }}>
        <Block row center middle>
          <Text h4 color={Colors.placeholder}>Make Public  </Text>
          <ToggleButton color='primary' onValueChange={() => { }} />
        </Block>
      </Block>
      <Block center style={{ paddingTop: Layout.base, backgroundColor: Colors.white }}>
        <Calendar />
      </Block>
      <Block center middle style={{ paddingTop: Layout.base * 2 }}>
        <Select
          defaultValue={'f'}
          items={[
            { label: 'Male', value: 'm' },
            { label: 'Female', value: 'f' },
          ]}
          shadow
          style={{ width:'99%' }}
        />
      </Block>
    </Block>
  );
}

export default EnterAddionalInfo;