import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icons from 'react-native-vector-icons/FontAwesome'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headL}>
                <TouchableOpacity style={styles.input}>
                    <TextInput placeholder='Bạn cần tìm sản phẩm gì?' />
                    <Icons style={{ marginLeft: 20 }} name="search" color={'#000'} size={22} />
                </TouchableOpacity>
            </View>
            <View style={styles.headR}>
                <TouchableOpacity style={styles.cart}>
                    <Icons style={{ color: '#FFFF' }} name="shopping-cart" color={'#000'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#1fc250',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headL: {
        flex: 6,
    },
    headR: {
        flex: 1,

    },
    input: {
        borderRadius: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal:40,
        paddingHorizontal:15
    },
    cart: {
        padding:10,
        marginHorizontal:5
    }
})