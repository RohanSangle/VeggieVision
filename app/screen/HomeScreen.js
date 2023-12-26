import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
//import { useAuth } from "@clerk/clerk-expo";
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            {/* <Header/> */}
            <Text>What food</Text>
            <Text>are we cooking today ?</Text>

            <View>
                <TextInput placeholder='What are you cooking ?'/>
                <Ionicons name="search" size={24} color="black" />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        //position:'absolute',
        //backgroundColor:'#DDB6C4',
        color:'blue',
        //alignItems:'center',
        justifyContent:'center',
        
    },
});