import React, { useEffect } from 'react'
import StackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import {Notifications} from 'react-native-notifications';;
import { firebase } from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const App = () => {

  const messagingInstance = firebase.messaging();
  let notificationListener = null;


  useEffect(() => {
    messagingInstance.registerDeviceForRemoteMessages();

    Notifications.getInitialNotification().then((notification) => {
      if (notification) {
        console.log(notification);
      }
    }).catch((err) => {
      console.log('Initial notification error',err);
    })

    Notifications.events().registerRemoteNotificationsRegistered((event) => {
      console.log('Token Registrado: ',event.deviceToken);
    });

    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      console.log(`Notification received in foreground: ${JSON.stringify(notification.payload)}`);
      completion({alert: false, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification, completion) => {
      console.log(`Notification opened: ${JSON.stringify(notification.payload)}`);

      showMessage({
        message: notification.payload.title,
        description: notification.payload.body,
        type: 'info',
        icon: 'info',
      })
      completion();
    });

    pushNotificationListener();

  }, [])

  pushNotificationListener = async () => {
        try {
            notificationListener = messagingInstance.onMessage(async(message) => {
                console.log("Notification recieved", message)
                Platform.OS === 'ios'
                    ? Notifications.postLocalNotification({
                        body: message.notification.body,
                        title: message.notification.title,
                        sound: 'chime.aiff',
                        silent: false,
                        category: 'SOME_CATEGORY',
                        userInfo: {
                            link:message.data.link
                        },
                    })
                    : Notifications.postLocalNotification({
                        title: message.notification.title,
                        body: message.notification.body,
                        extra: message.data,
                    });
            });

        } catch (error) {
            console.log("Notify ",error);
        }
    };

  return (
    <NavigationContainer>
      <StackNavigator />
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App;
