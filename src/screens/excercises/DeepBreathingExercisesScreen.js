import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import exercises from '../../components/exercises';

export default function DeepBreathingExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
            Этим видом дыхания полезно пользоваться, когда Вы выполняете действия, которые могут потребовать более значительных усилий или вызвать одышку, например, при подъеме по лестнице или по дороге, идущей вверх. Очень важно помнить, что у Вас нет никакой необходимости спешить:
            {
                '\n• Подумайте о том, как разбить намеченное Вами действие на более мелкие составляющие, с тем чтобы после его завершения Вы не устали и не испытывали одышку.\n' +
                '• Вдохните перед тем, как сделать «усилие», например, перед тем, как подняться на ступеньку.\n' +
                '• Сами усилия, например, при подъеме на ступеньку, следует делать на выдохе.\n' +
                '• Вам, возможно, будет легче завершить процесс подъема, если Вы будете вдыхать через нос и выдыхать через рот.'
            }
            </Text>
            {/* <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[3] })}>
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