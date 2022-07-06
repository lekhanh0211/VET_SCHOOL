import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Header name="Thông báo" />
      <View style={styles.body}>
        <Text style={styles.textrequest}>Bạn cần phải đăng nhập để nhận thông báo</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.btnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  body: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textrequest: {
    fontSize: 16,
    marginBottom: 20,
  },
  btnLogin: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#1fc250',
    borderColor: '#000000',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  }
})
