import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExcerciseTypesScreen from '../screens/ExcerciseTypesScreen';
import GeneralExcercisesScreen from '../screens/excercises/GeneralExcercisesScreen';


const Stack = createStackNavigator();

export default function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='ExcerciseTypes'
                options={{
                    title: '',
                    headerShown: false,
                    }}
                component={ExcerciseTypesScreen}
            />
            <Stack.Screen 
                name='GeneralExcercises'
                options={{
                  title: '',
                  }}
                component={GeneralExcercisesScreen}
            />
        </Stack.Navigator>
    )
}