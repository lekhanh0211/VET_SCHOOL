import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FlatList } from 'react-native-gesture-handler'

const listInfo = [
  {
    name: 'Lịch sử mua hàng'
  },
  {
    name: 'Liên hệ'
  },
  {
    name: 'Hỗ trợ'
  }
]

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Header name="Tài khoản" />
      <FlatList
        data={listInfo}
        renderItem={({ item }) => {
          console.log(item)
          return <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            // active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />;
        }}
        //để item hiển thị theo hướng ngang
        horizontal
        showsHorizontalScrollIndicator //ẩn thanh trượt ngang
        keyExtractor={(category) => category.name}
      />
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {

  },
})