import { React, useState } from 'react';
import { Text, View, ScrollView, SectionList, FlatList, TouchableOpacity, Button, StyleSheet, useWindowDimensions } from 'react-native';

export default function ExcerciseGroupsScreen({ navigation }) {

    const dataExcerciseGroups = [
        {
            text: 'Общие физические упражнения',
            nav: 'GeneralExercises',
        },
        {
            text: 'Одышка',
            nav: 'DyspneaExercises',
        },
    ]

    const { width } = useWindowDimensions();

    return (
        <View>
            <FlatList 
                data={dataExcerciseGroups}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(item.nav)}>
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                )}

                />
        </View>
    )
}

const styles = StyleSheet.create({
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