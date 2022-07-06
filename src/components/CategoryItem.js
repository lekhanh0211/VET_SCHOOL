import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native-animatable'

const CategoryItem = ({ name, imageUrl,handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            {/* <View style={[styles.container,
            active ? { backgroundColor: ("rgb(241,186,87)") } : { backgroundColor: "#FFF" }
            ]} > */}
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={imageUrl} />
                </View>
                <Text style={styles.textCate}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        width: 65,
        height: 70,
        borderRadius: 10,
        backgroundColor: "rgb(241,186,87)",
        marginVertical: 20,
        shadowColor: '#1fc250',
        shadowOffset: { width: 5, height: 5 },
        elevation: 5,
        shadowOpacity: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5

    },
    textCate: {
        color: "#000",
        textAlign: 'center',
        fontSize: 10,
        flex: 1,

    },
    img: {
        width: 25,
        height: 25,
    },
    imgContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5,
    },
})