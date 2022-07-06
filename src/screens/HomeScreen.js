import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/carousel'

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