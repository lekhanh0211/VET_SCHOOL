import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabbar from './src/navigation/Tabbar'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/navigation/BottomTab'
import Darkmopre from './src/test/darkmopre'
const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})