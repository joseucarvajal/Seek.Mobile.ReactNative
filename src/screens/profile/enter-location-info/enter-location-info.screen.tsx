import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ModalNoBackground } from '../../../components/profile';
import { Colors, Layout } from "../../../constants";
import { Button, Text, Block, Select, Input } from '../../../shared';

export interface IProfileProps { }

const EnterLocationInfo: React.FC<IProfileProps> = ({ }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(true);
  return (
    <Block safe flex>
      <Block flex>
        <Block order={2}>
          <Select
            defaultValue={'0'}
            items={[
              { label: 'City', value: '0' },
              { label: 'Cali', value: 'clo' },
              { label: 'Medellin', value: 'mde' },
            ]}
            shadow
            style={{ width: 'auto',  }}
          />
        </Block>
        <Block order={1} paddingTop={Layout.base}>
          <Select
            defaultValue={'0'}
            items={[
              { label: 'State', value: '0' },
              { label: 'Antioquia', value: '4' },
            ]}
            shadow
            style={{ width: 'auto' }}
          />
        </Block>
        <Block paddingTop={Layout.base}>
          <Input label='Zip Code' color='primary' borderless />
        </Block>
      </Block>
      <Block center middle>
        <Button type='gradient' shadow onPress={() => navigation.navigate('Congrats')}>
          <Text h2 bold color={Colors.white}>CONTINUE</Text>
        </Button>
      </Block>
      <ModalNoBackground 
        visible={modalVisible} 
        onVisibleChange={(visible: any) => setModalVisible(visible)}
        onPress={() => setModalVisible(!modalVisible)}
      />
    </Block>
  );
};

export default EnterLocationInfo;