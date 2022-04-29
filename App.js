import { useState, React } from 'react';
import AppLoading from 'expo-app-loading';
import  * as Font from 'expo-font';

import MainDrawer from './DrawerNavigate';
import { View } from 'react-native-web';

const fonts = () => Font.loadAsync({
    'rs-bold': require('./assets/fonts/RobotoSlab/RobotoSlab-Bold.ttf'),
    'rs-light': require('./assets/fonts/RobotoSlab/RobotoSlab-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainDrawer />
    );
  } else {
    return (
      <AppLoading startAsync={fonts} 
        onFinish={() => setFont(true)}
        onError={console.warn} />
    );
  }
}