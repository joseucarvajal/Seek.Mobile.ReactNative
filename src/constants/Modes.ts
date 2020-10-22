import Colors from "./Colors";

const ModesItems = [
  {
    title: 'Receptivity mode',
    id: 'receptivityMode', 
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`Receptivity mode... ${val && val}`),
    value: true,
  },
  {
    title: 'Incognito mode',
    id: 'incognitoMode',
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`Incognito mode... ${val && val}`),
    value: false,
  }
];

export default ModesItems;