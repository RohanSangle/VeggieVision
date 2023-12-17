import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
//import { useAuth } from "@clerk/clerk-expo";
import Header from '../components/Header'

const HomeScreen = () => {

    return (
        <View style={styles.homescreen}>
            <Header/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homescreen:{
        flex:1,
        backgroundColor:'#DDB6C4',
        alignItems:'center',
        justifyContent:'center'
    },
});