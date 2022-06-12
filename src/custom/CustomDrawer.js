import { React, useContext } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Alert, useWindowDimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { AuthContext } from '../components/context';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function CustomDrawer(props, { navigation }) {
    const { signOut } = useContext(AuthContext);
    const { height, width } = useWindowDimensions();
    
    const SignOutProfile = () => {
        Alert.alert("Стоять!", "Вы уверены, что хотите выйти из профиля?", [
            {
                text: "Нет",
                onPress: () => null,
                style: "cancel"
            },
            { 
                text: "Да", 
                onPress: () => signOut() 
            }
          ]);
          return true;
    }

    return (
        <View style={[styles.container, { width: width * 4 / 6, height: height }]}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#B2FEFA', '#0ED2F7']}
                style={{ width: width * 4 / 6, height: height}}
            >
                <View style={styles.logoContainer}>
                    <Image style={styles.img} source={require('../assets/images/logo2.png')} />
                </View>

                <View style={styles.user}>
                    <Image style={styles.userIcon} source={require('../assets/images/user-icon.png')}/>
                    <Text style={styles.userText}>Пользователь</Text>
                </View>
                <DrawerContentScrollView 
                    {...props} 
                    contentContainerStyle={{}}>
                    <DrawerItemList {...props}/>
                </DrawerContentScrollView>

                <TouchableOpacity
                    onPress={() => { 
                        // SignOutProfile() 
                        signOut()
                    
                    }}
                >
                    <View style={styles.footer}>
                        <Ionicons
                            name='log-out-outline'
                            size={25}
                            color='white'
                        />
                        <Text style={{ color: 'white', fontSize: 18 }}>Выйти</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 25,
        marginBottom: 25,
    },
    img: {
        height: 75,
        width: "100%",
    },
    userIcon: {
        marginBottom: 10,
    },
    userText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    user: {
        alignItems: 'center',
        marginBottom: 15,
    },
    username: {
        //TODO: исправить костыль c width
        width: 210,
        height: 50,
        textAlign: 'center', 
        justifyContent: 'center',
    },
    footer: {
        flexDirection: 'row',
        textAlign: 'center',
        padding: 20,
    }
})