import { React, useState } from 'react';
import { Text, View, SectionList, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

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
            name: 'Преодоление стресса',
            full: 'Тут тоже',
        },
        {
            name: 'Выполнение повседневных функций',
            full: 'Здесь',
        },
    ]) 

    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.title}>Здесь могла быть ваша реклама</Text>
            <View>
                <FlatList data={excercises} renderItem={({item}) => (
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Excercise', item)}>
                            <Text>{item.name}</Text>   
                    </TouchableOpacity>
                )}/>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexWrap: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    btn: {
        width: "40%",
        borderRadius: 25,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        backgroundColor: "skyblue",
    }  
})