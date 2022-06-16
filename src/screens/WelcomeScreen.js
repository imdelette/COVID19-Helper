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
      image: require('../assets/images/wave1.png'),
    },
    {
      id: '2',
      title: (
        <Text>ЗАПОЛНЯЙ <Text style={{ color: '#FF9900' }}>ДНЕВНИК</Text> НАБЛЮДЕНИЙ И ПОЛУЧАЙ СОВЕТЫ ОТ ДЕЙСТВУЮЩИХ ВРАЧЕЙ</Text>
      ),
      image: require('../assets/images/wave2.png'),
    },
    {
      id: '3',
      title: (
        <Text>СИНХРОНИЗИРУЙ{'\n'}ПРИЛОЖЕНИЕ С <Text style={{ color: '#FF9900' }}>УМНЫМИ{'\n'}ЧАСАМИ</Text></Text>
      ),
      text: 'Быстрая синхронизация;\nВсе данные в одном приложении;\nАнализ состояния;',
      image: require('../assets/images/wave3.png'),
    }
  ]

const [currentIndex, setCurrentIndex] =useState(0);
const scrollX = useRef(new Animated.Value(0)).current;
const slideRef = useRef(null);
const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
}).current;

const viewConfig =useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

function switcher(item) {
  switch (item.id) {
    case '1':
      return(
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>
          <View>
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#63E9F8', top: 82  }} />
            <Text style={{ width: 117, fontWeight: '700', fontSize: 14, lineHeight: 15, color: 'white', top: 200 }}>Узнавай о количестве заболевших прямо в приложении</Text>
          </View>
          <LinearGradient style={{ width: 165, height: 165, borderRadius: 82.5, top: 62, alignItems: 'center', justifyContent: 'center', }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF512F', '#F09819']}>
            <Text style={{ width: '80%', fontWeight: '700', fontSize: 14, lineHeight: 15, color: 'white', textAlign: 'center', }}>Добавляй в избранное лучшие статьи</Text>
          </LinearGradient>
      </View>
      )
    case '2':
      return(
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image style={{ top: 52 }} source={require('../assets/images/calendar.png')}/>
          <LinearGradient style={{ width: 100, height: 100, borderRadius: 50, top: 20,  alignItems: 'center', justifyContent: 'center',  }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF512F', '#F09819']}>
            <Text style={{ width: '80%', fontWeight: '600', fontSize: 11, lineHeight: 15, color: 'white', textAlign: 'center' }}>Как вы чувствуете себя?</Text>
          </LinearGradient>
        </View>
      )
    case '3':
      return(
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <LinearGradient style={{ width: 146, height: 146, borderRadius: 73, top: 37 }} colors={['#B2FEFA','#0ED2F7']}>
            <Image style={{ top: 12, left: 12 }} source={require('../assets/images/watch.png')}/>
          </LinearGradient>
          <LinearGradient style={{ width: 97, height: 97, borderRadius: 48.5, top: 14 }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF512F', '#F09819']}>
            <Image style={{ top: 15, left: 15 }} source={require('../assets/images/heart.png')}/>
          </LinearGradient>
        </View>
      )
  }
}

return (
    <View style={ styles.container }>

      <LinearGradient colors={['#B2FEFA','#0ED2F7']} style={{ width: '100%', height: '100%', }}>
        <View  style={styles.logo}>
          <Image source={require('../assets/images/logo2.png')} />
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
                    { switcher(item) }
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
          <LinearGradient style={{ borderRadius: 25, }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF512F', '#F09819']}>
            <TouchableOpacity style={styles.signInBtn} onPress={() => { navigation.navigate('SignIn') }}>
              <Text style={styles.btnText}>Войти</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={{ fontSize: 15, color: '#FFFFFF', width: '100%', textAlign: 'center' }}>или</Text>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => { navigation.navigate('SignUp') }}>
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
      width: 235,
      left: 40,
      fontWeight: 'bold',
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
      alignSelf: 'center',
      marginVertical: 15,
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
      width: 298,
      height: 46,
    },
    signUpBtn: {
      width: 298,
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
    }
})