import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import TailwindScreen from '../screens/TailwindScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import WeatherScreen from '../screens/WeatherScreen';
import RickAndMortyScreen from '../screens/RickAndMortyPages/RickAndMortyScreen';
import RickAndMortyDetails from '../screens/RickAndMortyPages/RickAndMortyDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={ Home } />
            <Stack.Screen name="CreditCardScreen" component={ CreditCardScreen } />
            <Stack.Screen name="TailWindScreen" component={ TailwindScreen } />
            <Stack.Screen name="WeatherScreen" component={ WeatherScreen } />
            <Stack.Screen name="RickAndMortyScreen" component={ RickAndMortyScreen } />
            <Stack.Screen name="RickAndMortyDetails" component={ RickAndMortyDetails } />
        </Stack.Navigator>
    );
}

export default StackNavigator;