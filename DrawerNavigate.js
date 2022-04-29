import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import ExcerciseTypesScreen from './src/screens/ExcerciseTypesScreen';
import ExcerciseScreen from './src/screens/ExcerciseScreen';

const Drawer = createDrawerNavigator();



export default function DrawerNavigate() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: 'Главная'}}
          />
        <Drawer.Screen
            name="ExcercisesScreen"
            component={ExcerciseTypesScreen}
            options={{title: 'Виды упражнений'}}
            />
        <Drawer.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Авторизация'}}
          />
        <Drawer.Screen
            name="ExcerciseTypeScreen"
            component={ExcerciseScreen}
            options={{title: 'Упражнение', drawerItemStyle: {display: 'none'}}}
            />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}