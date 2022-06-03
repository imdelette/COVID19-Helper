import { React, useState } from 'react';
import { Text, View, ScrollView, SectionList, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import StackNavigator from '../navigation/StackNavigator';

import { globalStyle } from  '../styles/style';

export default function ExcerciseTypesScreen({ navigation }) {

    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GeneralExcercises')}>
                <Text>Общие физические упражнения</Text>
            </TouchableOpacity>
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