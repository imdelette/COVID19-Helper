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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Имя пользователя"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setData(username)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Пароль"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setData(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgotBtn}>Забыли пароль?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
      style={globalStyle.btn}
      onPress={() => {signIn()}}
      >
        <Text>ВОЙТИ</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.registrationBtn}>Регистрация</Text>
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