import * as React from 'react';
import { useContext } from 'react';
import { Button, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, IconComponent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import ProfileScreen from '../screens/ProfileScreen';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import { AuthContext } from '../components/context';
import CustomDrawer from '../custom/CustomDrawer';
import CalendarScreen from '../screens/CalendarScreen';

const Drawer = createDrawerNavigator();


export default function DrawerNavigator({ navigation }) {
  const { height, width } = useWindowDimensions()
  const { signOut } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
          //это нам не надо
          drawerActiveBackgroundColor: 'steelblue',
          //^^^^^
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          swipeEdgeWidth: width / 4,
          drawerStyle: { width: width * 4 / 6, fontSize: 25 }, 
        }}
        >
        <Drawer.Screen
          name='Calendar'
          component={CalendarScreen}
          options={{
            title: 'Мой календарь',
            drawerIcon: ({color, size}) => (
              <Ionicons 
                  name='calendar-outline'
                  color={color}
                  size={size}
                  />
            ),
          }}
        />
        <Drawer.Screen 
          name='Dummy1'
          component={ProfileScreen}
          options={{
            title: 'Упражнения',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons 
                  name='run'
                  color={color}
                  size={size}
                  />
            ),
          }}
        />
        <Drawer.Screen 
          name='Dummy2'
          component={ProfileScreen}
          options={{
            title: 'Новости',
            drawerIcon: ({color, size}) => (
              <Ionicons 
                  name='ios-globe-outline'
                  color={color}
                  size={size}
                  />
            ),
          }}
          
        />
        <Drawer.Screen 
          name='Dummy3'
          component={ProfileScreen}
          options={{
            title: 'Настройки',
            
            drawerIcon: ({color, size}) => (
              <Octicons 
                  name='gear'
                  color={color}
                  size={size}
                  />
            ),
          }}
        />
        {/* <Drawer.Screen 
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
            /> */}
        {/* <Drawer.Screen 
            name='LogOut'
            onPress={() => { signOut() }}
            options={{title: 'Выйти из профиля'}}
            /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}