import { React, useEffect } from 'react';
import {  View, Text, BackHandler, Alert } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function HomeScreen({ navigation }) {
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Стоять!", "Вы уверены, что хотите выйти из приложения?", [
            {
              text: "Нет",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Да", onPress: () => BackHandler.exitApp() }
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
            <View style={globalStyle.button}>
                <Text>Добро пожаловать!</Text>
            </View>
        </View>
    )
}