import Colors from "./Colors";

const NotificationsItems = [
  {
    title: "Incoming discreet hello's",
    id: 'incomingDiscreetHello', 
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`Incoming discreet hello... ${val && val}`),
    value: true,
  },
  {
    title: 'Incoming gestures',
    id: 'incomingGestures',
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`Incoming gestures... ${val && val}`),
    value: false,
  },
  {
    title: 'Incoming chat',
    id: 'incomingChat',
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`Incoming chat... ${val && val}`),
    value: true,
  },
  {
    title: 'Temperature meter change',
    id: 'temperatureMeterChange',
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`Temperature meter change... ${val && val}`),
    value: false,
  },
  {
    title: 'In app vibrations',
    id: 'inAppVibrations',
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`In app vibrations.. ${val && val}`),
    value: true,
  },
  {
    title: 'In app sounds',
    id: 'inAppSounds',
    type: 'toggle', 
    color: Colors.white,
    action: (val: any = null) => console.log(`In app sounds... ${val && val}`),
    value: false,
  }
];

export default NotificationsItems;