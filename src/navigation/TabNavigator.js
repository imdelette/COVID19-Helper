import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
        <Tab.Screen
            name='Home'
            component={HomeScreen}
            />
        <Tab.Screen
            name='Add'
            component={AddScreen}
            />
        <Tab.Screen
            name='Chat'
            component={ChatScreen}
            />
    </Tab.Navigator>
    )
}