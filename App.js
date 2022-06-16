import { React, } from 'react';
import { useWindowDimensions, useState, useCallback, useEffect } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

import * as SplashScreen from 'expo-splash-screen';

import WelcomeStackNavigator from './src/navigation/WelcomeStackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { useFonts } from './src/hooks/useFonts';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  const { width, height } = useWindowDimensions();

  const loadFonts = async () => {
    await useFonts();
  };

  const isLoggedIn = async() => {
    try {
      await new Promise((resolve, reject) =>
        auth()
          .onAuthStateChanged(user => {
              if (user) {
                // User is signed in.
                resolve(user)
              } else {
                // No user is signed in.
                reject('no user logged in')
              }
            },
          // Prevent console error
          error => reject(error)
        )
      )
      return true
    } catch (error) {
      return false
    }
  }

  return(
    <NavigationContainer>
      { (!isLoggedIn) ? (
          <DrawerNavigator />
        ) : (
          <WelcomeStackNavigator />
        )
    }
    </NavigationContainer>
  )
}