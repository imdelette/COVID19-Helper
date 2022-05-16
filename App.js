import { useState, useEffect, useMemo, React, } from 'react';
// import { AppLoading } from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import { View, ActivityIndicator } from "react-native";

import  * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from './src/components/context';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SignInScreen from './src/screens/SignInScreen';

const fonts = () => Font.loadAsync({
    'rs-bold': require('./src/assets/fonts/RobotoSlab/RobotoSlab-Bold.ttf'),
    'rs-light': require('./src/assets/fonts/RobotoSlab/RobotoSlab-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('asdf');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  
  if (isLoading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  if(font) {
    return (
      <AuthContext.Provider value={authContext}>
        { userToken != null ? (
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