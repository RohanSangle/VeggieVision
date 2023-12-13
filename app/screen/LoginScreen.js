import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import UserLogin from '../components/UserLogin';

const LoginScreen=()=> {
    const [showComponent, setShowComponent] = useState(false);

    const handleButtonPress = () => {
        setShowComponent(true);
    };

  return (
    <>
        <View style={styles.loginscreen}>
            <Text>VegLife</Text>
            <Text>Your favourite source for best recipies</Text>
        </View>

        <TouchableOpacity style={styles.startcooking} onPress={handleButtonPress}>
            <Text>Start Cooking</Text>
        </TouchableOpacity>

        {showComponent && <UserLogin />}
    </>
  )
}

export default LoginScreen

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    loginscreen: {
        flex: 1,
        // backgroundColor: '#F7E8D3',
        alignItems: 'center',
        position: 'absolute',
        bottom: screenHeight * 0.35,
        //justifyContent: 'center',
    },
    startcooking:{
        flex: 1,
        backgroundColor: '#106274',
        alignItems: 'center',
        position: 'absolute',
        bottom: screenHeight * 0.1,
        justifyContent: 'center',
        height:50,
        width:250,
        borderRadius:20,

    }
});