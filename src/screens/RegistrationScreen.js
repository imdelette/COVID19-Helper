import React from "react";
import { Text, View, useState, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth';
 import { globalStyle } from "../styles/style";

export default function RegistrationScreen({ navigation }) {

    // const [data, setData] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //     checkTextInputChange: false,
    //     secureTextEntry: true,
    // })
    const data = {
        username: '',
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
    };


    const handleSignUp = async() => {
        await auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;
                navigation.replace('Drawer');
                console.log(`Registered in with ${user.email}`)
            })
            .catch(error => alert(error.message));
}

    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/logo1.png')} />
            <Text>Регистрация</Text>

            <Text>Имя</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    placeholderTextColor="black"
                    onChangeText={(username) => { data.username = username }}
                />
            </View>
        
            <Text>Адрес электронной почты</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    placeholderTextColor="black"
                    onChangeText={(email) => { data.email = email }}
                />
            </View>

            <Text>Пароль</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(password) => { data.password = password }}
                />
            </View>
        
            <TouchableOpacity 
                style={globalStyle.btn}
                onPress={ handleSignUp }
            >
                <Text>Зарегистрироваться</Text>
            </TouchableOpacity>
        </View>
    )
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