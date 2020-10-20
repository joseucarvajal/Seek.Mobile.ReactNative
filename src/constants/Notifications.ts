import Colors from "./Colors";

const NotificationsItems = [
  {
    title: "Incoming discreet hello's",
    id: 'incomingDiscreetHello', 
    type: 'toggle', 
    color: Colors.white,
    action: (val: any) => console.log(`Incoming discreet hello...${val}`),
    value: true,
  },
  {
    title: 'Incoming gestures',
    id: 'incomingGestures',
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('Incoming gestures...'),
    value: false,
  },
  {
    title: 'Incoming chat',
    id: 'incomingChat',
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('Incoming chat...'),
    value: true,
  },
  {
    title: 'Temperature meter change',
    id: 'temperatureMeterChange',
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('Temperature meter change...'),
    value: false,
  },
  {
    title: 'In app vibrations',
    id: 'inAppVibrations',
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('In app vibrations..'),
    value: true,
  },
  {
    title: 'In app sounds',
    id: 'inAppSounds',
    type: 'toggle', 
    color: Colors.white,
    action: () => console.log('In app sounds...'),
    value: false,
  }
];

export default NotificationsItems;