import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ShopScreen from '../screens/ShopScreen';
import AccountScreen from '../screens/AccountScreen';
import Notification from '../components/Notification';
const Tab = createBottomTabNavigator();
const Tabbar = () => {
  return (
    <Tab.Navigator screenOptions={{
      labelStyle: { textTransform: "none", fontSize: 12 },
      headerShown: false,
      tabBarActiveTintColor: '#2E86C1',
      tabBarActiveBackgroundColor: 'red'
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: "Trang chủ",
        tabBarIcon: ({ color, size }) =>
          <Icons name="home" color={color} size={30} />
      }} />
      <Tab.Screen name="News" component={NewsScreen} options={{
        tabBarLabel: "Tin tức",
        tabBarIcon: ({ color, size }) =>
          <Icons name="file-text" color={color} size={30} />
      }} />
      <Tab.Screen name="Shop" component={ShopScreen} options={{
        tabBarLabel: "Vett Shop",
        tabBarIcon: ({ color, size }) =>
          <Icon name="shop" color={color} size={30} />
      }} />
      <Tab.Screen name="Notification" component={Notification} options={{
        tabBarLabel: "Thông báo",
        tabBarIcon: ({ color, size }) =>
          <Icons name="bell" color={color} size={30} />
      }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarLabel: "Tài khoản",
        tabBarIcon: ({ color, size }) =>
          <Icon name="users" color={color} size={30} />
      }} />
    </Tab.Navigator>
  )
}

export default Tabbar
const styles = StyleSheet.create({})