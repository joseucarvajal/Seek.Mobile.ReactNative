const API_URL_DEV = 'http://192.168.1.57:32701/api/v1';

const api = {
  settings: {
    notificationsTypesByUser: '/notifications/user',
    modesTypesByUser: '/modes/user',
    enableNotificationByUser: '/notifications/user/enable',
    disableNotificationByUser: '/notifications/user/disable',
    enableModeByUser: '/modes/user/enable',
    disableModeByUser: '/modes/user/disable',
  }
};

export {
    api,
    API_URL_DEV
};