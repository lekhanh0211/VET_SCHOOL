import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ShopScreen from '../screens/ShopScreen';
import AccountScreen from '../screens/AccountScreen';
import Notification from '../components/Notification';
// import * as Animatable from 'react-native-animatable';

// import Notification from '../components/Notification';
const Tab = createBottomTabNavigator();

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.FontAwesome, name: 'home', activeColor: '#1fc250', inActiveColor: '#393939', component: HomeScreen },
  { route: 'News', label: 'News', type: Icons.FontAwesome, name: 'file-text', activeColor: '#1fc250', inActiveColor: '#393939', component: NewsScreen },
  { route: 'Shop', label: 'Shop', type: Icons.FontAwesome, name: 'circle', activeColor: '#1fc250', inActiveColor: '#393939', component: ShopScreen },
  { route: 'Notification', label: 'Notification', type: Icons.FontAwesome, name: 'bell', activeColor: '#1fc250', inActiveColor: '#393939', component: Notification },
  { route: 'Account', label: 'Account', type: Icons.MaterialCommunityIcons, name: 'user', activeColor: '#1fc250', inActiveColor: '#393939', component: AccountScreen },
];
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 60,
        position: 'absolute',
        // bottom: 15,
        // right: 15,
        // left: 15,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,

      }
    }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              // tabBarLabel:({item.label}),
              tabBarIcon: ({ color, focused }) => (
                // <Icons type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={"black"} size={22} />)
                <Icons type={item.type} name={item.name} color={focused ? item.activeColor : item.inActiveColor} size={22} />),

            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default BottomTab
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})