import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/carousel'
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './CartScreen'

const Stack = createStackNavigator();

const NavigationSearch = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options />
    </Stack.Navigator>
  )
}
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Search />
      <Carousel />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})