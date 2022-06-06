import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import exercises from '../../components/exercises';

export default function WarmUpExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
                Разминка подготавливает ваше тело к физическим нагрузкам, чтобы предотвратить травмы. Ваша разминка должна длиться около 5 минут, и в конце разминки Вы должны почувствовать легкую одышку. Разминочные упражнения можно выполнять сидя или стоя. Если Вы выполняете разминку стоя, держитесь за устойчивую поверхность для поддержки, если это необходимо. 
                <Text style={styles.bold}> Повторите каждое движение 2-4 раза.</Text>
            </Text>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[0] })}>
                    <Text>Начнём!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },

    btn: {
        borderRadius: 25,
        width: 180,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: "center",
        backgroundColor: "skyblue",
    },
})