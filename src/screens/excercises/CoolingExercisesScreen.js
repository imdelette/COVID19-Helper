import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import exercises from '../../components/exercises';

export default function CoolingExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
                Физические упражнения для охлаждения организма позволяют Вашему организму постепенно остыть и вернуться к моменту завершения тренировки. 
                Период охлаждения после выполнения физических упражнений должен длиться примерно <Text style={styles.bold}>5 минут</Text> и к его окончанию Ваше дыхание должно нормализоваться. 
                Попробуйте выполнить все предлагаемые упражнения и растяжки, но, если некоторые из них окажутся для Вас слишком трудными, выполняйте те, которые Вам по силам.
            </Text>
            <Text style={styles.bold}>
                Растяжка мышц:
            </Text>
            <Text>
                Упражнения для растяжки мышц могут способствовать уменьшению любой болезненности, 
                которую Вы можете почувствовать в течение одного-двух дней после тренировки. 
                Вы можете делать такие упражнения сидя или стоя. 
                Все растяжки должны выполняться осторожно и медленно с удержанием каждой из них <Text style={styles.bold}>в течение 15-20 секунд</Text>.
            </Text>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[3] })}>
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