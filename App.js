import { useState, useEffect, useReducer, useCallback, useMemo, React, } from 'react';
import { View, ActivityIndicator, BackHandler, Text, StyleSheet, useWindowDimensions } from "react-native";
import  * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';


import { AuthContext } from './src/components/context';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SignInScreen from './src/screens/SignInScreen';

const fontsLoading = () => Font.loadAsync({
    'ms-bold': require('./src/assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'ms-regular': require('./src/assets/fonts/Montserrat/Montserrat-Regular.ttf')
})

export default function App() {
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
    signIn: (username, password) => {
      // setUserToken('asdf');
      let userToken;
      userToken = null;
      console.log('username: ', username);
      console.log('password: ', password);
      // if(username == 'user' && password == 'password') {
      //   userToken = 'qwer';
      // }
      userToken = 'qwer';
      dispatch({ type: 'LOGIN', id: username, token: userToken });
    },
    signOut: () => {
      // setUserToken(null);
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    }
  }));

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

  return (
    <AuthContext.Provider value={authContext}>
      { loginState.userToken != null ? (
        <DrawerNavigator />
      )
      :
        <SignInScreen />
      }
    </AuthContext.Provider>
  );
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