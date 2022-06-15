import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from "react-native";
import auth from '@react-native-firebase/auth';
import TabNavigator from "../navigation/TabNavigator";
import { LinearGradient } from "expo-linear-gradient";

export default function SignInScreen({ navigation }) {

  const { height, width } = useWindowDimensions();

  const data = {
    email: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  };

  const handleLogin = async() => {
    await auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(`Logged in with ${user.email}\n${auth().currentUser}`)
      })
      .catch(error => alert(error.message));
  }

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Drawer');
      }
    })
  }, [])

  

  return (
      // <LinearGradient colors={['#B2FEFA','#0ED2F7']} style={[{ width: '100%', height: '100%', }, styles.container]}>
      <View style={styles.container}>
        <View style={{ position: 'absolute', top: 0}}>
                <Image source={require('../assets/images/wave-auth-reg1.png')} />
            </View>
            <View style={{ position: 'absolute', top: height-273 }}>
                <Image source={require('../assets/images/wave-auth-reg2.png')} />
            </View>
        <View style={styles.logo}>
          <Image source={require('../assets/images/logo1.png')} />
        </View>

        <View style={{ flex: 0.9, width: '85%', justifyContent: 'center' }}>
          <Text style={{ marginBottom: 30, fontSize: 24, textAlign: 'center' }}>Авторизация</Text>

          <Text style={styles.text}>Адрес электронной почты</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="black"
                onChangeText={(email) => { data.email = email }}
              />
          </View>

          <Text style={styles.text}>Пароль</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(password) => { data.password = password }}
              />
            </View>
        </View>

        <View style={[styles.btnsBox, { flex: 0.25 }]}>
          <LinearGradient style={{ borderRadius: 25, }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF512F', '#F09819']}>
            <TouchableOpacity style={styles.signInBtn} onPress={ handleLogin }>
              <Text style={styles.btnText}>Войти</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity style={{ width: 150 }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', top: 21 }}>Забыли пароль?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wave} />
      </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
  },
  logo: {
    flex: 0.20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    height: 'auto',
  },
  inputView: {
    backgroundColor: "#EFF8FA",
    borderWidth: 3,
    borderColor: '#0ED2F7',
    borderRadius: 10,
    width: '100%',
    height: 45,
    marginBottom: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    marginHorizontal: 12,
    width: '100%',
    fontSize: 20,
    fontWeight: '700'
  },
  btnsBox: {
    flex: 0.4,
    alignItems: 'center',
    
  },
  signInBtn: {
    width: 298,
    height: 46,
  },
  btnText: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 46,
  },
  // wave: {
  //   backgroundColor: 'white',
  //   transform: [
  //     { matrix: [] }
  //   ]
  // }
});