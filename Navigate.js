import { React } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import globalStyle from './styles/style';
import Main from './components/Main';
import Excercises from './components/Excercises';
import ExcerciseType from './components/ExcerciseType';

const Stack = createStackNavigator();

export default function Navigate() {

    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="MainScreen"
                    component={Main}
                    options={{title: 'Главная'}}
                    />
                <Stack.Screen
                    name="ExcercisesScreen"
                    component={Excercises}
                    options={{title: 'Виды упражнений'}}
                    />
                <Stack.Screen
                    name="ExcerciseTypeScreen"
                    component={ExcerciseType}
                    options={{title: 'Упражнение'}}
                    />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}