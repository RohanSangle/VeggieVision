import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Animated,ImageBackground } from 'react-native'
import React,{ useState, useRef } from 'react'
//import UserLogin from '../components/UserLogin';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

const LoginScreen=()=> {
    const [showComponent, setShowComponent] = useState(false);
    const translateY = useRef(new Animated.Value(screenHeight)).current;

    const handleButtonPress = () => {
        setShowComponent(true);
        Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    WebBrowser.maybeCompleteAuthSession();

    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    
    const onPress = React.useCallback(async () => {
        try {
        const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
        if (createdSessionId) {
            setActive({ session: createdSessionId });
        } else {
            // Use signIn or signUp for next steps such as MFA
        }
        } catch (err) {
        console.error("OAuth error", err);
        }
    }, []);

  return (
    <ImageBackground
        source={require('../../assets/images/VeggieVision_loginscreen.png')}
        style={styles.backgroundImage}
    >

        <View style={styles.loginscreen}>
            <Text>VegLife</Text>
            <Text>Your favourite source for best recipies</Text>
        </View>

        <TouchableOpacity style={styles.startcooking} onPress={onPress}>
            <Text>Start Cooking</Text>
        </TouchableOpacity>

        {/* <Animated.View style={[styles.userLoginContainer, { transform: [{ translateY }] }]}
        pointerEvents={showComponent ? 'auto' : 'none'}>
            {showComponent && <UserLogin />}
        </Animated.View> */}
    </ImageBackground>
  )
}

export default LoginScreen

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position:'relative',
        resizeMode: 'cover', // or 'contain' depending on your preference
        justifyContent: 'center', // Optional: Align content vertically
      },
    loginscreen: {
        flex: 1,
        // backgroundColor: '#F7E8D3',
        alignItems: 'center',
        position: 'absolute',
        bottom: screenHeight * 0.30,
        left:'18%',
        //justifyContent: 'center',
    },
    startcooking:{
        flex: 1,
        backgroundColor: '#106274',
        alignItems: 'center',
        position: 'absolute',
        bottom: screenHeight * 0.05,
        justifyContent: 'center',
        height:50,
        width:250,
        borderRadius:20,
        left:'15%',

    },
    // userLoginContainer: {
    //     ...StyleSheet.absoluteFillObject,
    //     justifyContent: 'flex-end',
    // },
});