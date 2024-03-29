import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Quran = () => {
  const route = useRoute();
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollViewRef = useRef(null);

  useLayoutEffect(() => {
    retrieveScrollPosition();
  }, []);

  useLayoutEffect(() => {
    saveScrollPosition();
  }, [scrollPosition]);

  const saveScrollPosition = async () => {
    try {
      await AsyncStorage.setItem('@scrollPosition', JSON.stringify(scrollPosition));
    } catch (error) {
      console.error('Error saving scroll position:', error);
    }
  };

  const retrieveScrollPosition = async () => {
    try {
      const savedPosition = await AsyncStorage.getItem('@scrollPosition');
      if (savedPosition !== null) {
        setScrollPosition(parseInt(savedPosition));
        // Scroll to the saved position
        scrollViewRef.current.scrollTo({ y: parseInt(savedPosition), animated: false });
      }
    } catch (error) {
      console.error('Error retrieving scroll position:', error);
    }
  };

  const ayahText = route.params?.ayahText || <ActivityIndicator />;
  const theSuraName = route.params?.SuraName || <ActivityIndicator />;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      onScroll={(event) => {
        setScrollPosition(event.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16}
      ref={scrollViewRef}
    >
      <View style={styles.secondParent}>
        <View style={styles.card}>
          <View style={styles.cardChild}>
            <Text style={styles.cardContent}> {theSuraName} </Text>
            <Text style={styles.cardContentone}>
               اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ
            </Text>
            <Image
              style={styles.imgScreen}
              source={require('../CardImgQuran.png')}
            />
          </View>
        </View>
        <View style={styles.ayahParent}>
          <Text style={styles.ayahTextStyle}>{ayahText}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  secondParent: {
    backgroundColor: '#1D2233',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    height: 200,
    alignItems: 'center',
    marginTop: '10%',
    color: 'white',
    fontWeight: 'bold',
  },
  cardChild: {
    position: 'relative',
    height: 250,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imgScreen: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  cardContent: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: '20%',
    zIndex: 999,
  },
  cardContentone: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: '40%',
    zIndex: 999,
  },
  ayahParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    width: '100%',
  },
  ayahTextStyle: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
  },
});

export default Quran;
