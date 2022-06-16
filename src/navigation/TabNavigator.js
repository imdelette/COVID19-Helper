import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import CalendarScreen from "../screens/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen";

import StackNavigator from "./StackNavigator";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
            <Tab.Navigator 
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: 'white' },
                    tabBarInactiveTintColor: 'steelblue',
                    tabBarActiveTintColor: 'orange',
                }}
                initialRouteName='Home'
            >
            <Tab.Screen
                name='Chat'
                component={ChatScreen}
                options={{
                    title: 'Чат',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons 
                            name='chatbox-sharp'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Calendar'
                component={CalendarScreen}
                options={{
                    title: 'Календарь',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons 
                            name='calendar-outline'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Главная',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons 
                            name='ios-home-sharp'
                            color={color}
                            size={size}
                        />
                    )
                }}
                
            />

            <Tab.Screen
                name='ExcerciseGroups'
                component={StackNavigator}
                options={{
                    title: 'Упражнения',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons 
                            name='run'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
                    <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: 'Профиль',
                    tabBarIcon: ({color, size}) => (
                        <Feather 
                            name='user'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}