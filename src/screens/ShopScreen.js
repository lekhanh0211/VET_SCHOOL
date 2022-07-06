import { Dimensions, StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../components/CategoryItem'
import Carousel from '../components/carousel'

const listCategory = [
  {
    name: "Sách giáo khoa",
    imageUrl: require("../assets/images/BookCategories.png")
  },
  {
    name: "Sách giáo viên",
    imageUrl: require("../assets/images/Children.png")

  },
  {
    name: "Sách tham khảo",
    imageUrl: require("../assets/images/VanPhongPham.png")

  },
  {
    name: "Ngoại ngữ - Từ điển",
    imageUrl: require("../assets/images/Children.png")

  },
  {
    name: "Kinh tế",
    imageUrl: require("../assets/images/Schedule.png")

  },
  {
    name: "Đời sống - Tâm lý",
    imageUrl: require("../assets/images/TamLy.png")

  },
  {
    name: "Sách thiếu nhi",
    imageUrl: require("../assets/images/Toy.png")

  },
  {
    name: "Máy tính",
    imageUrl: require("../assets/images/VanHoc.png")

  },
  {
    name: "Văn học",
    imageUrl: require("../assets/images/KinhTe.png")

  },
  {
    name: "Bách hóa - Lưu niệm",
    imageUrl: require("../assets/images/NgoaiNgu.png")

  },

]

const ShopScreen = () => {

  return (
    <View style={styles.container}>
      <Search />
      <Carousel />
      <View style={styles.catContainer}>

        <FlatList
          data={listCategory}
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
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },


  catContainer: {

  }
  ,
})