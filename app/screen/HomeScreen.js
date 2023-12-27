import { StyleSheet, Text, View,TouchableOpacity, TextInput,ImageBackground } from 'react-native'
import React from 'react'
//import { useAuth } from "@clerk/clerk-expo";
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/Colors_pallete.js';


const HomeScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/VeggieVission_standard.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                {/* <Header/> */}
                <Text>What food</Text>
                <Text>are we cooking today ?</Text>

                <View>
                    <TextInput placeholder='What are you cooking ?'/>
                    <Ionicons name="search" size={24} color="black" />
                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position:'relative',
        resizeMode: 'cover', // or 'contain' depending on your preference
        justifyContent: 'center', // Optional: Align content vertically
      },
    container:{
        flex:1,
        //position:'relative',
        //backgroundColor:colors.PRIMARY,
        alignItems:'center',
        justifyContent:'center',
        
    },
});