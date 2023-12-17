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

const TabNavigation=({signoutcomponent})=> {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle: {
        // position: 'absolute',
        display:'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between', 
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            )
        }}
      />
      <Tab.Screen name="collection" component={Collection}
        options={{
            tabBarIcon:({color,size})=>(
                <Feather name="bookmark" size={size} color={color} />
            )
        }}
      />
      <Tab.Screen name="profile" component={Profile}
        options={{
            tabBarIcon:({color,size})=>(
                <FontAwesome5 name="user" size={size} color={color} />
            )
        }}
      />
    </Tab.Navigator>
  )
};

export default TabNavigation;
