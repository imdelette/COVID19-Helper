import { React, useEffect } from 'react';
import {  View, Text, BackHandler, Alert, StyleSheet, TouchableOpacity, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

import { globalStyle } from  '../styles/style';

export default function HomeScreen({ navigation }) {

    function createChannels() {
      PushNotification.createChannel(
        {
          channelId: 'test-channel',
          channelName: 'Test Channel'
        }
      )
    }

    useEffect(() => {
      createChannels();
    }, [])

    const handleNotification = () => {
      PushNotification.localNotification({
        channelId: 'test-channel',
        title: 'You clicked on button',
        message: 'Hello'
      })
    }

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Стоять!", "Вы уверены, что хотите выйти из приложения?", [
            {
              text: "Нет",
              onPress: () => null,
              style: "cancel"
            },
            { 
              text: "Да", 
              onPress: () => BackHandler.exitApp() 
            }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction,
        );
    
        return () => backHandler.remove();
    }, []);

    return (
        <View style={globalStyle.main}>
            <TouchableOpacity onPress={() => { handleNotification() } }>
              <Text>Кнопочка для уведомления</Text>
            </TouchableOpacity>
            <View style={globalStyle.button}>
                <Text>Как вы себя чувствуете сегодня?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 600,
  }
})