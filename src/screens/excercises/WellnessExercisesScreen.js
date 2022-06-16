import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import exercises from '../../data/exercises';

export default function WellnessExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
                Оздоровительные физические упражнения рекомендуется делать <Text style={styles.bold}>в течение 20-30 минут 5 дней в неделю</Text>.
                Описание нескольких примеров таких упражнений приводится ниже. Кроме того, к их числу может быть отнесена любая физическая активность, в результате которой глубина и частота дыхания повышается в умеренной или выраженной степени. Продолжительность оздоровительных упражнений следует увеличивать постепенно, чтобы не подвергать организм перегрузкам. Увеличение продолжительности оздоровительных упражнений может быть очень незначительным - например, на 30 или 60 секунд.
            </Text>
            
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[1] })}>
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