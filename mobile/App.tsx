import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { Subscription } from 'expo-modules-core';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import './src/services/NotificationConfigs';
import * as Notifications from 'expo-notifications';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const getPushNotificationListener = useRef<Subscription>();
  const responsePushNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getPushNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responsePushNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if (getPushNotificationListener.current && responsePushNotificationListener.current) {
        Notifications.removeNotificationSubscription(getPushNotificationListener.current);
        Notifications.removeNotificationSubscription(responsePushNotificationListener.current);
      }
    }
  }, []);


  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}