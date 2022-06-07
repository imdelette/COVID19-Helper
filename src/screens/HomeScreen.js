import { React, useEffect } from 'react';
import {  View, Text, BackHandler, Alert, StyleSheet } from 'react-native';

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