import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from "react-native";

import { globalStyle } from "../styles/style";

import { AuthContext } from "../components/context";

export default function SignInScreen({ navigation }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const { signIn } = useContext(AuthContext);

  const loginHandle = (username, password) => {
    signIn(username, password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Имя пользователя"
          placeholderTextColor="black"
          onChangeText={(username) => { data.username = username }}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Пароль"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => { data.password = password }}
        />
      </View>
 
      <TouchableOpacity 
        style={globalStyle.btn}
        onPress={() => { loginHandle(data.username, data.password) }}
      >
        <Text>ВОЙТИ</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotBtn}>Забыли пароль?</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "powderblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
 
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgotBtn: {
    height: 30,
  },

  registrationBtn: {
    height: 50,
    color: 'blue',
    textDecorationLine: 'underline',
    justifyContent: 'flex-end',
  },
});

// import auth from '@react-native-firebase/auth';
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// import WelcomeScreen from '../screens/WelcomeScreen';
// import TabNavigation from '../navigation/TabNavigator';

// export default function Authentication() {
//     // Set an initializing state whilst Firebase connects
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
  
//     // Handle user state changes
//     function onAuthStateChanged(user) {
//       setUser(user);
//       if (initializing) setInitializing(false);
//     }
  
//     useEffect(() => {
//       const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//       return subscriber; // unsubscribe on unmount
//     }, []);
  
//     if (initializing) return null;
  
//     if (!user) {
//       return (
//         <View>
//           <WelcomeScreen />
//         </View>
//       );
//     }
  
//     return (
//       <View>
//         <TabNavigation />
//       </View>
//     );
//   }