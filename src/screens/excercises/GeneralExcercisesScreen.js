import { React, useState } from 'react';
import { Text, View, ScrollView, SectionList, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function GeneralExcercisesScreen({ navigation }) {
    return (
        <View>
            <View>
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

                <ScrollView style={styles.container} horizontal={true}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>Разминочные упражнения</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>Оздоровительные физические упражнения</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>Укрепляющие (силовые) физические упражнения</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>Упражнения для охлаждения организма после тренировки</Text>
                        </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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