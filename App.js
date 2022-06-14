import { React, } from 'react';
import { useWindowDimensions, } from "react-native";
import auth from '@react-native-firebase/auth';

import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import WelcomeStackNavigator from './src/navigation/WelcomeStackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {

  const { width, height } = useWindowDimensions();

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