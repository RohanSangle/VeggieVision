import { StyleSheet, Text, View,ImageBackground,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Collection = () => {
  return (
    <ImageBackground
            source={require('../../assets/images/VeggieVission_empty.png')}
            style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Saved</Text>
        <View style={styles.nosaved}>
          <View style={styles.nosavedmsg}>
            <Text style={styles.nosavedtitle}>No saved recipies</Text>
            <Text style={styles.nosaveddesc}>You dont have any saved recipies.Why not discover new?</Text>
            <TouchableOpacity style={styles.explore}>
              <Text>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Collection

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
    alignItems: 'center',
    //justifyContent: 'center',
  },
  heading:{
    fontSize:25,
    color:'brown',
    position:'relative',
    top:screenHeight*0.05,

  },
  nosaved:{
    backgroundColor:'grey',
    height:'40%',
    width:'95%',
    borderRadius:20,
    alignItems:'center',
    position:'relative',
    top:screenHeight*0.52,
  },
  nosavedmsg:{
    position:'relative',
    alignItems:'center',
    top:45,
    gap:30,

  },
  nosavedtitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'brown',
  },
  nosaveddesc:{
    fontSize:15,
    width:110,
    color:'brown',
  },
  explore:{
    backgroundColor:'#106274',
    height:50,
    width:300,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
    
  }
})