import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import exercises from '../../components/exercises';

export default function DyspneaReliefExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
                Ниже приводится описание некоторых положений тела, которые могут уменьшить Вашу одышку. Попробуйте каждое из них, чтобы выяснить, какое или какие из них могут Вам помочь.              
            </Text>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[4] })}>
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