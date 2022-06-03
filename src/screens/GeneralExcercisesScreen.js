import { React, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function GeneralExcercisesScreen({ navigation }) {
    const screens = [
        {
            id: '1',
            text: 'Разминочные упражнения',
            nav: 'WarmUpExcercises',
        },
        {
            id: '2',
            text: 'Оздоровительные физические упражнения',
            nav: 'WellnessExcercises',
        },
        {
            id: '3',
            text: 'Укрепляющие (силовые) физические упражнения',
            nav: 'StrengtheningExcercises',
        },
        {
            id: '4',
            text: 'Упражнения для охлаждения организма после тренировки',
            nav: 'CoolingExcercises',
        },
    ]

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {
                    '  • Физические упражнения являются важной частью восстановления здоровья после тяжелого заболевания, вызванного COVID-19. Физические упражнения могут помочь вам:\n'+
                    '  • Улучшить физическую форму;\n' +
                    '  • Улучшить свое мышление;\n' +
                    '  • Уменьшить симптомы одышки;\n' +
                    '  • Увеличить мышечную силу;\n' +
                    '  • Уменьшить стресс и улучшить настроение;\n' +
                    '  • Улучшить чувство равновесия и координацию движений;\n' +
                    '  • Повысить чувство уверенности в себе;\n' +
                    '  • Повысить уровень внутренней энергии;\n'
                    }
                </Text>

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