import { React } from 'react';
import { Text, View } from 'react-native';

import { globalStyle } from  '../styles/style';

export default function ExcerciseScreen({ route }) {
    return (
        <View style={globalStyle.main}>
            <Text>{route.params.full}</Text>
      </View>
    )
}