import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default function WelcomeStackNavigator() {

    return(
        <Stack.Navigator initialRouteName='Welcome'>
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
                component={SignUpScreen}
            />

            <Stack.Screen
                name='Drawer'
                options={{
                    title: '',
                    headerShown: false,
                    }}
                component={DrawerNavigator}
            />
    </Stack.Navigator>
    )
}