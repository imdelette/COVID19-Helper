import { React, useState } from 'react';
import { Text, View, SectionList, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function ExcerciseTypesScreen({ navigation }) {

    //TODO: перенести в базу данных
    const [excercises, setExcercises] = useState([
        {
            name: 'Купирование отдышки',
            full: 'Здесь пока ничего нет!',
        },
        {
            name: 'Физические упражнения',
            full: 'Здесь пока ничего нет!',
        },
        {
            name: 'Восстановление голоса',
            full: 'Здесь пока ничего нет!',
        },
        {
            name: 'Восстановление функции глотания',
            full: 'Здесь пока ничего нет!',
        },
        {
            name: 'Восстановление памяти и внимания',
            full: 'Здесь пока ничего нет!',
        },
        {
            name: 'Преодоление стресса',
            full: 'Здесь пока ничего нет!',
        },
        {
            name: 'Выполнение повседневных функций',
            full: 'Здесь пока ничего нет!',
        },
    ]) 

    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.title}>Здесь могла быть ваша реклама</Text>
            <View>
                <FlatList data={excercises} renderItem={({item}) => (
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Excercise', item)}>
                            <Text style={styles.text}>{item.name}</Text>   
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
        justifyContent: 'center',
        marginTop: 2,
    },
    btn: {
        borderRadius: 25,
        width: 'auto',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: "skyblue",
    },
    text: {
        fontSize: 17,
    },
})