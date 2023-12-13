import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import google from '../../assets/images/google_logo.jpg'

const UserLogin = () => {
  return (
    <>
        <View style={styles.login}>
            <Text>Sign up with</Text>
        </View>

        <TouchableOpacity style={styles.loginbox}>
            <Image source={google} style={{width:40,height:40}}/>
            <Text>Sign up with Google</Text>
        </TouchableOpacity>
    </>

  )
}

export default UserLogin

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    login:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        //justifyContent:'center',
        position: 'absolute',
        bottom: screenHeight * 0.05,
        height:'50%',
        width:'90%',
        borderRadius:20,
    },
    loginbox:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold',
        position: 'absolute',
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#FDFDFC',
        //color:'#FDFDFC',
        bottom: screenHeight * 0.4,
        height:'10%',
        width:'50%',
        borderRadius:20,
    },

});