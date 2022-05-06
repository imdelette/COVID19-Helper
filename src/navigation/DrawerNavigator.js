import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import ExcerciseTypesScreen from '../screens/ExcerciseTypesScreen';
import ExcerciseScreen from '../screens/ExcerciseScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{title: 'Главная'}}
          />
        <Drawer.Screen
            name="ExcerciseTypes"
            component={ExcerciseTypesScreen}
            options={{title: 'Виды упражнений'}}
            />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Авторизация'}}
          />
        <Drawer.Screen
            name="Excercise"
            component={ExcerciseScreen}
            options={{title: 'Упражнение', drawerItemStyle: {display: 'none'}}}
            />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}