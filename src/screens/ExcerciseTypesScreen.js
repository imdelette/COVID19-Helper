import { React, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function ExcerciseTypesScreen({ navigation }) {

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
            <View style={styles.flatList}>
                <FlatList data={excercises} renderItem={({item}) => (
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExcerciseScreen', item)}>
                            <Text>{item.name}</Text>   
                    </TouchableOpacity>
                )}/>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    btn: {
        display: 'flex',
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "silver",
    }  
})