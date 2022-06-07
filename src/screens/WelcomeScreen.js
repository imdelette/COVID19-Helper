import { LinearGradient } from 'expo-linear-gradient';
import { React, useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, ScrollView, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useFonts } from 'expo-font';

import Paginator from '../components/Paginator';

export default function WelcomeScreen({ navigation }) {
  const { width } = useWindowDimensions();

  const carouselData = [
    {
      id: '1',
      title: (
        <Text>СЛЕДИ ЗА АКТУАЛЬНЫМИ НОВОСТЯМИ О <Text style={{ color: '#FF512F' }}>COVID-19</Text></Text>
      ),
      text: '',
      image: require('../assets/images/wave1.png'),
      textStyle: {

      }
    },
    {
      id: '2',
      title: (
        <Text>ЗАПОЛНЯЙ <Text style={{ color: '#FF9900' }}>ДНЕВНИК</Text> НАБЛЮДЕНИЙ И ПОЛУЧАЙ СОВЕТЫ ОТ ДЕЙСТВУЮЩИХ ВРАЧЕЙ</Text>
      ),
      text: '',
      image: require('../assets/images/wave2.png'),
      textStyle: {

      }
    },
    {
      id: '3',
      title: (
        <Text>СИНХРОНИЗИРУЙ{'\n'}ПРИЛОЖЕНИЕ С <Text style={{ color: '#FF9900' }}>УМНЫМИ{'\n'}ЧАСАМИ</Text></Text>
      ),
      text: '',
      image: require('../assets/images/wave3.png'),
      textStyle: {

      }
    }
  ]

    const [currentIndex, setCurrentIndex] =useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig =useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={[styles.container, { marginTop: getStatusBarHeight() }]}>

          {/* <LinearGradient colors={['#B2FEFA','#0ED2F7']} style={{ width: '100%', height: '100%', }}> */}
            <View style={{ justifyContent: 'center' }}>
              <Image style={styles.logo} source={require('../assets/images/logo2.png')} />
            </View>

            <View style={{ flex: 0.9 }}>
                <FlatList
                    data={carouselData}
                    renderItem={({ item }) => (
                      <View style={[styles.container, { width }]}>
                        <View>
                            <ScrollView>
                                <Text style={styles.title}>{item.title}</Text>
                            </ScrollView>
                        </View>

                        {/* <Image source={item.image}
                            style={styles.waves}
                            resizeMode="contain"
                          /> */}
                      </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false, }
                        )}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slideRef}
                    />
            </View>

            <View style={styles.pag}>
              <Paginator data={carouselData} scrollX={scrollX}/>
            </View>

            <View style={styles.btnsBox}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.signInBtn} colors={['#FF512F', '#F09819']}>
                <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}>
                  <Text style={styles.btnText}>Войти</Text>
                </TouchableOpacity>
              </LinearGradient>

              <Text style={{ color: 'white' }}>или</Text>

              <TouchableOpacity style={styles.signUpBtn} onPress={() => { navigation.navigate('SignUp') }}>
                <Text style={styles.btnText}>Регистрация</Text>
              </TouchableOpacity>
            </View>

          {/* </LinearGradient> */}
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
      width: 235,
      left: 40,
      fontWeight: '700',
      fontSize: 14,
    },
    waves: {
      flex: 1,
      alignContent: 'flex-end',
      alignItems: 'flex-end',
    },
    logo: {
      flex: 0.2,
      justifyContent: 'center',
      marginBottom: 10,
      width: '100%',
      height: 'auto',
    },
    pag: { 
      flex: 0.1,
      alignItems: 'center'
    },
    btnsBox: {
      flex: 0.4,
      alignItems: 'center',
      
    },
    signInBtn: {
      width: 272,
      height: 46,
      borderRadius: 25,
      alignItems: 'center',
    },
    signUpBtn: {
      width: 272,
      height: 46,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 25,
    },
    btnText: {
      flex: 1,
      color: '#FFFFFF',
      fontWeight: '700',
      fontSize: 24,
      textAlign: 'center',
      lineHeight: 46,
      // fontFamily: 'Montserrat'
    }
})