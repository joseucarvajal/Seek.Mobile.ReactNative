import Colors from "./Colors";

const LegalItems = [
  {
    title: 'Terms of service',
    id: 'termsOfService', 
    color: Colors.white,
    action: () => console.log('Terms of service...'),
  },
  {
    title: 'Privacy policy',
    id: 'privacyPolicy',
    color: Colors.white,
    action: () => console.log('Privacy policy...'),
  },
  {
    title: 'Cookie policy',
    id: 'cookiePolicy',
    color: Colors.white,
    action: () => console.log('Cookie policy...'),
  }
];

export default LegalItems;