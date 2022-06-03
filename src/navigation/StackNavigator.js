import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExcerciseTypesScreen from '../screens/ExcerciseTypesScreen';
import GeneralExcercisesScreen from '../screens/GeneralExcercisesScreen';
import WarmUpExcercisesScreen from '../screens/excercises/WarmUpExcercisesScreen';
import WellnessExcercisesScreen from '../screens/excercises/WellnessExcercisesScreen';
import StrengtheningExcercisesScreen from '../screens/excercises/StrengtheningExcercisesScreen';
import CoolingExcercisesScreen from '../screens/excercises/CoolingExcercisesScreen';
import ExcercisesCarouselScreen from '../screens/excercises/ExcercisesCarouselScreen';


const Stack = createStackNavigator();

export default function StackNavigator() {
    return(
        <Stack.Navigator
            >
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
                  headerShown: false
                  }}
                component={GeneralExcercisesScreen}
            />
            <Stack.Screen 
                name='WarmUpExcercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={WarmUpExcercisesScreen}
            />
            <Stack.Screen 
                name='WellnessExcercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={WellnessExcercisesScreen}
            />
            <Stack.Screen 
                name='StrengtheningExcercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={StrengtheningExcercisesScreen}
            />
            <Stack.Screen 
                name='CoolingExcercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={CoolingExcercisesScreen}
            />
            <Stack.Screen
                name="ExcercisesCarousel"
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={ExcercisesCarouselScreen}
            />
        </Stack.Navigator>
    )
}