import React from 'react';
import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'rs-bold',
        textAlign: 'center'
    },
    container: {
        width: 100,
    },
    btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'silver',
    },
})