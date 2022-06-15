import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'm-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });