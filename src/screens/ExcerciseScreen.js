import { React, useEffect } from 'react';
import { Text, View, BackHandler, } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function ExcerciseScreen({ route }) {
    //TODO: настроить возвращение на ExerciseTypesScreen по hardwareBackPress

    return (
        <View style={globalStyle.main}>
            <Text>{route.params.full}</Text>
      </View>
    )
}