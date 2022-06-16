import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import excercises from '../../data/exercises';

export default function ControlBreathingExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
            Описанная ниже техника поможет Вам расслабиться и контролировать свое дыхание:             
            {
                 '\n• Сядьте в удобное положение так, чтобы Ваша спина имела хорошую опору.\n' +
                 '• Положите одну руку на грудь, а другую на живот.\n' +
                 '• Если это помогает Вам расслабиться, закройте глаза, если нет, то оставьте их открытыми, и сконцентрируйтесь на дыхании.\n' +
                 '• Делайте медленные вдохи через нос (или через рот, если Вы не можете дышать через нос) и медленные выдохи через рот.\n' +
                 '• В процессе дыхания Вы почувствуете, что рука на животе поднимается выше, чем рука на груди.\n' +
                 '• Старайтесь дышать медленно, расслабленно, ровно и спокойно, прилагая как можно меньше усилий.\n'
            }
            </Text>
            {/* <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: excercises[3] })}>
                    <Text>Начнём!</Text>
                </TouchableOpacity>
            </View> */}
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