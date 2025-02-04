import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collection from '../screen/Collection';
import Profile from '../screen/Profile';
import HomeScreen from '../screen/HomeScreen';
import { MaterialCommunityIcons,Feather,FontAwesome5,Ionicons,AntDesign  } from '@expo/vector-icons';
import Search from '../screen/Search';
import Scan from '../screen/Scan';
import colors from '../constants/Colors_pallete';

const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle: {
        // position: 'absolute',
        bottom:0,
        right:0, 
        left:0, 
        elevation:0,
        height:60,
        backgroundColor:'pink', 
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon:({size,focused})=>(
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <MaterialCommunityIcons name="home-outline" size={size} color={focused ? "yellow" : "#106274"} />

              </View>
            )
        }}
      />
      <Tab.Screen name="Search" component={Search} 
        options={{
            tabBarIcon:({size,focused})=>(
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Ionicons name="search" size={size} color={focused ? "yellow" : "#106274"} />

              </View>
            )
        }}
      />
      <Tab.Screen name="Scan" component={Scan} 
        options={{
            tabBarIcon:({size,focused})=>(
              <View style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'yellow',
                width: 70,
                height: 70,
                top:-20,
                borderRadius:99,

              }}>
                <AntDesign name="scan1" size={size} color="black" />

              </View>
            )
        }}
      />
      <Tab.Screen name="collection" component={Collection}
        options={{
            tabBarIcon:({size,focused})=>(
                <Feather name="bookmark" size={size} color={focused ? "yellow" : "#106274"} />
            )
        }}
      />
      <Tab.Screen name="profile" component={Profile}
        options={{
            tabBarIcon:({size,focused})=>(
                <FontAwesome5 name="user" size={size} color={focused ? "yellow" : "#106274"} />
            )
        }}
      />
    </Tab.Navigator>
  )
};

export default TabNavigation;
