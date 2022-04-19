import { React, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function Excercises({ navigation }) {

    //TODO: перенести в базу данных
    const [excercises, setExcercises] = useState([
        {
            name: 'Купирование отдышки',
            full: 'Здесь могла быть ваша реклама',
        },
        {
            name: 'Физические упражнения',
            full: 'Тут тоже',
        },
        {
            name: 'Восстановление голоса',
            full: 'И здесь',
        },
        {
            name: 'Восстановление функции глотания',
            full: 'Возможно тут',
        },
        {
            name: 'Восстановление памяти и внимания',
            full: 'И тут',
        },
        {
            name: 'Выполнение повседневных функций',
            full: 'Здесь',
        },
        {
            name: 'Преодоление стресса',
            full: 'Тут тоже',
        },
    ]) 

    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.title}>Здесь могла быть ваша реклама</Text>
            <FlatList data={excercises} renderItem={({item}) => (
                <TouchableOpacity>
                    <View style={globalStyle.button}>
                        <Button title={item.name} color={'violet'} onPress={() => navigation.navigate('ExcerciseTypeScreen', item)} />
                    </View>
                </TouchableOpacity>
            )}/>
      </View>
    )
}