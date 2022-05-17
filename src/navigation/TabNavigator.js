import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import AddReminderScreen from '../screens/AddReminderScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: 'skyblue'},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'steelblue',
        }}>
        <Tab.Screen
            name='Home2'
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
            name='Add'
            component={AddReminderScreen}
            options={{
                title: 'Добавить напоминание',
                tabBarIcon: ({color, size}) => (
                    <Ionicons 
                        name='md-add-circle'
                        color={color}
                        size={size}
                    />
                )
            }}
        />
    </Tab.Navigator>
    )
}