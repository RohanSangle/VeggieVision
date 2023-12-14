import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from "@clerk/clerk-expo";

const HomeScreen = () => {

    return (
        <View style={styles.homescreen}>
            <Text>HomeScreen</Text>
            <TouchableOpacity>
                <Text>Sign out</Text>
            </TouchableOpacity>
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