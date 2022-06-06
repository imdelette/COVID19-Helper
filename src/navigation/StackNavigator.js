import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExerciseGroupsScreen from '../screens/ExerciseGroupsScreen';
import ExercisesCarouselScreen from '../screens/excercises/ExercisesCarouselScreen';

import GeneralExercisesScreen from '../screens/GeneralExercisesScreen';
import DyspneaExercisesScreen from '../screens/DyspneaExercisesScreen';

import WarmUpExercisesScreen from '../screens/excercises/WarmUpExercisesScreen';
import WellnessExercisesScreen from '../screens/excercises/WellnessExercisesScreen';
import StrengtheningExercisesScreen from '../screens/excercises/StrengtheningExercisesScreen';
import CoolingExercisesScreen from '../screens/excercises/CoolingExercisesScreen';
import DyspneaReliefExercisesScreen from '../screens/excercises/DyspneaReliefExercisesScreen';
import ControlBreathingExercisesScreen from '../screens/excercises/ControlBreathingExercisesScreen';
import DeepBreathingExercisesScreen from '../screens/excercises/DeepBreathingExercisesScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return(
        <Stack.Navigator
            >
            <Stack.Screen
                name='ExerciseGroups'
                options={{
                    title: '',
                    headerShown: false,
                    }}
                component={ExerciseGroupsScreen}
            />
            <Stack.Screen 
                name='GeneralExercises'
                options={{
                  title: '',
                  headerShown: false
                  }}
                component={GeneralExercisesScreen}
            />
            <Stack.Screen 
                name='DyspneaExercises'
                options={{
                  title: '',
                  headerShown: false
                  }}
                component={DyspneaExercisesScreen}
            />
            <Stack.Screen 
                name='WarmUpExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={WarmUpExercisesScreen}
            />
            <Stack.Screen 
                name='WellnessExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={WellnessExercisesScreen}
            />
            <Stack.Screen 
                name='StrengtheningExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={StrengtheningExercisesScreen}
            />
            <Stack.Screen 
                name='CoolingExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={CoolingExercisesScreen}
            />
            <Stack.Screen 
                name='DyspneaReliefExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={DyspneaReliefExercisesScreen}
            />
            <Stack.Screen 
                name='ControlBreathingExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={ControlBreathingExercisesScreen}
            />
            <Stack.Screen 
                name='DeepBreathingExercises'
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={DeepBreathingExercisesScreen}
            />
            <Stack.Screen
                name="ExercisesCarousel"
                options={{
                    title: '',
                    headerShown: false
                    }}
                component={ExercisesCarouselScreen}
            />
        </Stack.Navigator>
    )
}