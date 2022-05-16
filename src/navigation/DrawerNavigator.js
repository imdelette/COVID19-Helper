import * as React from 'react';
import { useContext } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/SignInScreen';
import ExcerciseTypesScreen from '../screens/ExcerciseTypesScreen';
import ExcerciseScreen from '../screens/ExcerciseScreen';
import TabNavigator from './TabNavigator';
import { AuthContext } from '../components/context';
import CustomDrawer from '../custom/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { signOut } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />} 
        // screenOptions={{headerShown: false}}
        >
        <Drawer.Screen
            name='Home'
            component={TabNavigator}
            options={{title: 'Главная'}}
            />
        <Drawer.Screen 
            name='Profile'
            component={ProfileScreen}
            options={{title: 'Профиль'}}
          />
        <Drawer.Screen
            name='ExcerciseTypes'
            component={ExcerciseTypesScreen}
            options={{title: 'Виды упражнений'}}
            />
        <Drawer.Screen
            name="Excercise"
            component={ExcerciseScreen}
            options={{title: 'Упражнение', drawerItemStyle: {display: 'none'}}}
            />
        {/* <Drawer.Screen 
            name='LogOut'
            onPress={() => { signOut() }}
            options={{title: 'Выйти из профиля'}}
            /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}