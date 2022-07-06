import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const NavigationSearch = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options/>
        </Stack.Navigator>
    )
}

export default NavigationSearch

const styles = StyleSheet.create({})