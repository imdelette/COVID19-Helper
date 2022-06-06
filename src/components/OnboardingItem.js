import { React } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function OnboardingItem({ item }) {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image}
                style={styles.image}
                resizeMode="contain"/>
            
            <View style={styles.textBox}>
                <ScrollView>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        flex: 0.6,
        justifyContent: 'center',
        marginBottom: 10,
        width: '100%',
        height: 'auto',
    },

    title: {
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: 'steelblue',
    },

    description: {
        fontWeight: '300',
        color: 'steelblue',
        textAlign: 'center',
        paddingHorizontal: 64,
        textAlign: 'left',
    },

    textBox: {
        flex: 0.3,
        backgroundColor: 'powderblue',
        borderRadius: 25,
        height: '80%',
        width: '90%',
        padding: 10,
    }
})