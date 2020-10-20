import Colors from "./Colors";

const ModesItems = [
  {
    title: 'Receptivity mode',
    id: 'receptivityMode', 
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('Receptivity mode...'),
    value: true,
  },
  {
    title: 'Incognito mode',
    id: 'incognitoMode',
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('Incognito mode...'),
    value: false,
  }
];

export default ModesItems;