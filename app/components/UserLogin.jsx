import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import google from '../../assets/images/google_logo.jpg'

const UserLogin = () => {
  return (
    <>
        <View style={styles.login}>
            <Text>Sign up with</Text>
        </View>

        <View style={styles.loginbox}>

            <TouchableOpacity style={styles.loginbutton}>
                <Image source={google} style={{width:40,height:40}}/>
                <Text>Sign up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbutton}>
                <Image source={google} style={{width:40,height:40}}/>
                <Text>Sign up with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbutton}>
                <Image source={google} style={{width:40,height:40}}/>
                <Text>Sign up as Guest</Text>
            </TouchableOpacity>
        </View>
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
        left:'5%',
        //paddingLeft:'10%',
    },
    loginbutton:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold',
        position: 'relative',
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#106274',
        //bottom: screenHeight * 0.1,
        height:'28%',
        width:'70%',
        borderRadius:30,
        gap:15,
        //left:'8%',
        top:'10%',
    },
    loginbox:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        //justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        position: 'absolute',
        bottom: screenHeight * 0.3,
        height:'20%',
        width:'90%',
        borderRadius:20,
        gap:50,
        left:'5%',
        //paddingLeft:'10%',
    }

});