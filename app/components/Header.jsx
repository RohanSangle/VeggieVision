import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>What food</Text>
      <Text>are we cooking today ?</Text>

      <View>
        <TextInput placeholder='What are you cooking ?'/>
        <Ionicons name="search" size={24} color="black" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },

});