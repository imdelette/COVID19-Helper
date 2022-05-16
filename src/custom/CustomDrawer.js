import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={{backgroundColor: 'powderblue'}}
                >
                <Image 
                    source={require('../assets/images/user-icon.png')}
                    style={{height: 50, width: 50, margin: 10}}
                    />
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View>
                <Text>Our custom text</Text>
            </View>
        </View>
    )
}