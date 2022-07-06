import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../components/Header'

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Header name="Giỏ hàng" />
            <View style={styles.cartTitle}>
                <Icons style={styles.icon} name="book" color={'#369369'} size={25} />
                <Text style={styles.textCart}>Sản phẩm đã chọn</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'red', fontSize: 16 }}>Xóa tất cả</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.product}>
                <Text>Danh mục sản phẩm</Text>
            </ScrollView>
            <View style={styles.cartTitle}>
                <Text style={styles.textCart}>Tổng tạm tính</Text>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>đ</Text>
            </View>
            <TouchableOpacity style={styles.btnOrder}>
                <Text style={styles.textOrder}>Đặt hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cartTitle: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    product: {
        flex: 1,
        backgroundColor: 'red',
    },
    textCart: {
        marginHorizontal: 10,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
    btnOrder: {
        backgroundColor: '#369369',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom:20
    },
    textOrder: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
})