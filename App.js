import { useState, useEffect, useReducer, useCallback, useMemo, React, } from 'react';
import { View, ActivityIndicator, BackHandler, Text, StyleSheet, useWindowDimensions, AppLoading } from "react-native";
import getAuth from '@react-native-firebase/auth';
import useFonts from './src/hooks/useFonts';

import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import WelcomeStackNavigator from './src/navigation/WelcomeStackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {

  // const LoadFonts = async () => {
  //   await useFonts();
  // };

  const { width, height } = useWindowDimensions();

  // const


  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await fontsLoading;
  //       await SplashScreen.preventAutoHideAsync();
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

//   <View style={styles.container}>
//     <LinearGradient
//       // Background Linear Gradient
//       colors={['#B2FEFA', '#0ED2F7']}
//       style={[styles.background, { width, height, marginTop: getStatusBarHeight() },]}
//     />
// </View>

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

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  ellipse: {

  },
  text: {
    // fontFamily: 'ms-regular',
    fontSize: 20,
    textAlign: 'center'
  }
})