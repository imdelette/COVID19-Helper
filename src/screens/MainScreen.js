import { React } from 'react';
import {  View, Text, Button } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function MainDrawer({ navigation }) {
    return (
        <View style={globalStyle.main}>
            <View style={globalStyle.button}>
                <Text>Добро пожаловать!</Text>
            </View>
        </View>
    )
}