import React from 'react';
import { View, StyleSheet, Text, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import exercises from '../../components/exercises';

export default function StrengtheningExcercisesScreen({ navigation }) {
    
    return(
        <View>
            <Text>
                Укрепляющие физические упражнения помогут восстановить силу мышц, которые ослабли из-за перенесенной болезни. Вы должны стремиться делать <Text style={styles.bold}>три сеанса укрепляющих упражнений каждую неделю</Text>. Все упражнения рекомендуется делать <Text style={styles.bold}>в 3 подхода по 10 повторов каждое с коротким перерывом для отдыха между подходами</Text>. Если упражнения покажутся Вам трудными, начните с меньшего количества повторов в каждом подходе, постепенно доведя их число до 10. Когда Вы начнете выполнять эти упражнения без затруднений и в полном объеме, используйте более тяжелые отягощения, чтобы заставить Ваши мышцы работать сильнее. В качестве отягощений Вы можете использовать консервные банки или бутылки с водой.
                Ниже приведено описание ряда упражнений для укрепления мышц рук и ног, которые можно выполнять сидя или стоя. Эти упражнения можно выполнять в любом порядке.
                <Text style={styles.bold}>Не забывайте делать вдох, когда Вы готовитесь выполнить самую трудную часть упражнения, и делать выдох, когда вы прилагаете усилие</Text>.
            </Text>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[2].slice(0, 3) })}>
                    <Text>Упражнения для рук</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ExercisesCarousel', { exercisesData: exercises[2].slice(3, 7) })}>
                    <Text>Упражнения для ног</Text>
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