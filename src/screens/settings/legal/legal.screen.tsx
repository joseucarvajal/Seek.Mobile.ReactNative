import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Block, Tabs, Text } from "../../../shared";

export interface ILegalProps { 
  route?: any | undefined;
}

const Legal: React.FC<ILegalProps> = ({ route }) => {
  const tab = route.params?.tab || 'privacy';
  
  return (
    <Block flex>
      <Tabs initialIndex={tab} />
      <Block safe flex>
        <Text small light>
        Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque.
    Etiam aliquet neque sagittis erat tincidunt liquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non agna
    maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar.
    Cras eu sem sed tellus sodales pellentesque nec id libero. Vestibulum tincidunt, ipsum vitae finibus tempus, orci mi iaculis lacus, id faucibus erat leo ac nisl. Nullam vel pulvinar nisi, ac fringilla urna.
    Etiam aliquet neque sagittis erat tincidunt liquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non agna
    maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar.
    Nulla eleifend pulvinar purus, molestie uismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in.
        </Text>
      </Block>
    </Block>
  );
};

export default Legal;
