import { React, useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, ScrollView } from 'react-native';

import OnboardingItem from '../../components/OnboardingItem';
import Paginator from '../../components/Paginator';

export default function ExercisesCarouselScreen({ route }) {

    const [currentIndex, setCurrentIndex] =useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const { exercisesData } = route.params;

    const viewConfig =useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={exercisesData}
                    renderItem={({ item }) => <OnboardingItem item={ item } />}
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

            <Paginator data={exercisesData} scrollX={scrollX}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})