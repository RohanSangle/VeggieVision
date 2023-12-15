import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collection from '../screen/Collection';
import Profile from '../screen/Profile';
import HomeScreen from '../screen/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="home-outline" size={24} color="yellow" />
            )
        }}
      />
      <Tab.Screen name="collection" component={Collection}
        options={{
            tabBarIcon:({color,size})=>(
                <Feather name="bookmark" size={24} color="yellow" />
            )
        }}
      />
      <Tab.Screen name="profile" component={Profile} 
        options={{
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="user" size={24} color="yellow" />
            )
        }}
      />
    </Tab.Navigator>
  )
}
