import { React, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function DyspneaExcercisesScreen({ navigation }) {
    const screens = [
        {
            id: '1',
            text: 'Положение тела, помогающие облегчить одышку',
            nav: 'DyspneaReliefExercises',
        },
        {
            id: '2',
            text: 'Контролируемое дыхание',
            nav: 'ControlBreathingExercises',
        },
        {
            id: '3',
            text: 'Медленное глубокое дыхание животом',
            nav: 'DeepBreathingExercises',
        },
    ]

    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    data={screens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(item.nav)}>
                            <Text style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
                    )}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 15,
    },
    text: {
        fontSize: 16,
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