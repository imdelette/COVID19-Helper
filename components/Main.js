import { React } from 'react';
import {  View, Button } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function Main({ navigation }) {
    return (
        <View style={globalStyle.main}>
            <View style={globalStyle.button}>
                <Button title={'Виды упражнений'} color={'violet'} onPress={() => {
                    navigation.navigate('ExcercisesScreen');
                }} />
            </View>
      </View>
    )
}