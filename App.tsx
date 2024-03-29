import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import Quran from './components/Quran';
import TimingScreen from './components/TimingScreen';
import salahWay from './components/salahWay';
import Wash from './components/Wash';
import EslamCummunity from './components/EslamCummunity';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Quran"
          component={Quran}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="TimingScreen"
          component={TimingScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="salahWay"
          component={salahWay}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Wash"
          component={Wash}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="EslamCummunity"
          component={EslamCummunity}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: true,
            headerBackTitleVisible: false,
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
