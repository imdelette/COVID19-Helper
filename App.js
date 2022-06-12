import { useState, useEffect, useReducer, useCallback, useMemo, React, } from 'react';
import { View, ActivityIndicator, BackHandler, Text, StyleSheet, useWindowDimensions, AppLoading } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFonts from './src/hooks/useFonts';

import * as SplashScreen from 'expo-splash-screen';

import { AuthContext } from './src/components/context';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import WelcomeStackNavigator from './src/navigation/WelcomeStackNavigator';
import Authentication from './src/components/Authentication';

export default function App() {

  // const [IsReady, SetIsReady] = useState(false);

  // const LoadFonts = async () => {
  //   await useFonts();
  // };

  const { width, height } = useWindowDimensions();

  const [userToken, setUserToken] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (previousState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...previousState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...previousState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...previousState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...previousState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async(username, password) => {
      let userToken;
      userToken = null;
      console.log('username: ', username);
      console.log('password: ', password);
      if(username == 'U' && password == 'P') {
        try {
          userToken = 'qwer';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e);
        }
      }
      console.log('token: ', userToken);
      dispatch({ type: 'LOGIN', id: username, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      console.log('token after reopen app: ', userToken);
      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  

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

  // if(IsReady) {
    return(
      // <Authentication />
      <AuthContext.Provider value={authContext}>
      { loginState.userToken != null ? (
        <DrawerNavigator />
      )
      :
        <WelcomeStackNavigator />
      }
      </AuthContext.Provider>
    );
  // } else {
  //   return (
  //     <AppLoading
  //       startAsync={LoadFonts}
  //       onFinish={() => SetIsReady(true)}
  //       onError={() => {}}
  //     />
  //   );
  // }
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