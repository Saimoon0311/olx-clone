// import React, { Component } from 'react';
// import {Notifications} from 'react-native-notifications';

// export default class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     Notifications.registerRemoteNotifications();

//     Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
//       console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
//       completion({alert: false, sound: true, badge: false});
//     });

//     Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
//       console.log(`Notification opened: ${notification.payload}`);
//       completion();
//     });
//   }
// }