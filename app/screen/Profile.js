import { StyleSheet, Text, View,Button,ImageBackground,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Colors_pallete from '../constants/Colors_pallete'

const SignOut = () => {
  const { isLoaded,signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.signout}> 
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

const Profile = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/VeggieVission_standard.png')}
      style={styles.backgroundImage}
    >
      
      <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.profilepic}>
          <Text>.</Text>
        </View>
        <Text style={styles.username}>Rohan Sangle</Text>
        <Text style={styles.position}>Newbie Chef</Text>
        <TouchableOpacity style={styles.edit}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        
        <SignOut/>
        
      </View>
    </ImageBackground>
  )
}

export default Profile

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position:'relative',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    //position:'relative',
    //backgroundColor: Colors_pallete.PRIMARY,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  heading:{
    fontSize:25,
    color:'black',
    position:'relative',
    top:screenHeight*0.05,

  },
  profilepic:{
    backgroundColor:'white',
    height:100,
    width:100,
    borderRadius:99,
    alignItems:'center',
    position:'relative',
    top:screenHeight*0.15,
    
  },
  username:{
    fontSize:25,
    color:'black',
    position:'relative',
    top:screenHeight*0.16,
    
  },
  position:{
    fontSize:15,
    color:'black',
    position:'relative',
    top:screenHeight*0.16,
    
  },
  edit:{
    position:'relative',
    top:screenHeight*0.19,
    backgroundColor:"#106274",
    height:30,
    width:80,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:12,
  },
  signout:{
    position:'relative',
    top:screenHeight*0.2,
    
  }
})