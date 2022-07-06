import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Darkmopre = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.areaContainer}>
                <StatusBar barStyle={'light-content'} />
            </SafeAreaView>
        </View>
    )
}

export default Darkmopre

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        
    },
    areaContainer: {
        backgroundColor: 'green',
    },
})