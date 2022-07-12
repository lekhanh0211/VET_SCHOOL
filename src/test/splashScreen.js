import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
const splashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Animatable.View style={styles.header}
                animation="bounceInDown"
            >
                <Text style={styles.title}>Cafe with Tony</Text>
                <Text style={styles.text}>Sign in with account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('signInScreen')}>
                    <LinearGradient
                        colors={['red', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Animatable.Text style={styles.textSign}
                            animation="fadeInLeft"
                            duraton="2000"
                        >Let Get Started
                        </Animatable.Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={25}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
            <View style={styles.footer}>
                <Animatable.Image source={require("../assets/images/hl.png")}
                    resizeMode='cover'
                    style={styles.img}
                    animation="bounceIn"
                    duraton="2000"
                />
            </View>
        </View>
    )
}

export default splashScreen
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const { WIDTH } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5,
    },
    header: {
        flex: 1,
        backgroundColor: '#ffff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    img: {
        width: height_logo,
        height: height_logo
    },
    footer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signIn: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        paddingVertical: 10
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
})