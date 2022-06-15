import * as React from 'react';
import { useContext } from 'react';
import { Button, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, IconComponent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawer from '../custom/CustomDrawer';
import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';
import WelcomeStackNavigator from './WelcomeStackNavigator';
import SignInScreen from '../screens/SignInScreen';

const Drawer = createDrawerNavigator();


export default function DrawerNavigator({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
      <Drawer.Navigator
        initialRouteName='DrawerHome' 
        drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
          //это нам не надо
          drawerActiveBackgroundColor: 'steelblue',
          //^^^^^
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          swipeEdgeWidth: width / 4,
          drawerStyle: { width: width * 4 / 6, }, 
          drawerLabelStyle: { fontSize: 16 }
        }}
        >
      <Drawer.Screen 
        name='DrawerHome'
        options={{
          title: 'Добрый день!',
          drawerItemStyle: { display: 'none' }
        }}
        component={TabNavigator}
      />
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
      </Drawer.Navigator>
  );
}