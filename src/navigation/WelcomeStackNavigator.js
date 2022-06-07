import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator
            >
            <Stack.Screen
                name='Welcome'
                options={{
                    title: '',
                    headerShown: false,
                    }}
                component={WelcomeScreen}
            />
            <Stack.Screen
                name='SignIn'
                options={{
                    title: '',
                    headerShown: false,
                    }}
                component={SignInScreen}
            />
            <Stack.Screen
                name='SignUp'
                options={{
                    title: '',
                    headerShown: false,
                    }}
                component={RegistrationScreen}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}