import { useState, useEffect, useReducer, useMemo, React, } from 'react';
// import { AppLoading } from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import { View, ActivityIndicator, BackHandler, } from "react-native";
import  * as Font from 'expo-font';
import 'react-native-reanimated';

import { AuthContext } from './src/components/context';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SignInScreen from './src/screens/SignInScreen';
import ExcercisesCarouselScreen from './src/screens/excercises/ExcercisesCarouselScreen';

const fonts = () => Font.loadAsync({
    'rs-bold': require('./src/assets/fonts/RobotoSlab/RobotoSlab-Bold.ttf'),
    'rs-light': require('./src/assets/fonts/RobotoSlab/RobotoSlab-Light.ttf')
})

export default function App() {

  const [font, setFont] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

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
      // setIsLoading(false);
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
      // setIsLoading(false);
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type: 'RETRIEVE_TOKEN' });
    }, 1000);
  }, []);
  
  if (loginState.isLoading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  if(font) {
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
  } else {
    return (
      <AppLoading startAsync={fonts} 
        onFinish={() => setFont(true)}
        onError={console.warn} />
    );
  }
}