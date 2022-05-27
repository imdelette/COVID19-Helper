import { React, useContext } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../components/context';

export default function CustomDrawer(props, { navigation }) {
    const { signOut } = useContext(AuthContext);
    
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
        <View style={{flex: 1,}}>
            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={{}}
                >
                <View
                    style={styles.container}
                    // onPress={() => {}}
                    >
                    <Image 
                        source={require('../assets/images/user-icon.png')}
                        style={styles.img}
                        />
                    <View style={styles.username}> 
                        <Text style={{fontSize: 20}}>Имя профиля</Text>
                    </View>
                </View>
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
                        size={18}
                    />
                    <Text>Выйти</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row', 
        backgroundColor: 'skyblue', 
        padding: 10,
        marginBottom: 10,
    },
    img: {
        height: 50, 
        width: 50,
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