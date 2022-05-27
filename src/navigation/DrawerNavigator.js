import * as React from 'react';
import { useContext } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/SignInScreen';
import ExcerciseTypesScreen from '../screens/ExcerciseTypesScreen';
import ExcerciseScreen from '../screens/ExcerciseScreen';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import { AuthContext } from '../components/context';
import CustomDrawer from '../custom/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { signOut } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
          headerBackgroundContainerStyle: {
            backgroundColor: 'skyblue'
          },
          headerTintColor: 'steelblue',
          drawerActiveBackgroundColor: 'skyblue',
          drawerActiveTintColor: 'steelblue',
          
        }}
        >
        <Drawer.Screen
            name='Home'
            component={TabNavigator}
            options={{
              title: 'Главная',
              drawerIcon: ({color, size}) => (
                <Ionicons 
                    name='ios-home-sharp'
                    color={color}
                    size={size}
                    />
              ),
            }}
            />
        <Drawer.Screen 
            name='Profile'
            component={ProfileScreen}
            options={{
              title: 'Профиль',
              drawerIcon: ({color, size}) => (
                <Ionicons 
                    name='ios-person'
                    color={color}
                    size={size}
                    />
              )
            }}
          />
        <Drawer.Screen
            name='Excercises'
            component={StackNavigator}
            options={{
              title: 'Виды упражнений',
              drawerIcon: ({color, size}) => (
                <Ionicons 
                    name='heart-circle-outline'
                    color={color}
                    size={size}
                    />
              )
            }}
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