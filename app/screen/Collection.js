import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'

const Collection = () => {
  return (
    <ImageBackground
            source={require('../../assets/images/VeggieVission_standard.png')}
            style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text>Collection</Text>
      </View>
    </ImageBackground>
  )
}

export default Collection

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position:'relative',
    resizeMode: 'cover', // or 'contain' depending on your preference
    justifyContent: 'center', // Optional: Align content vertically
  },
  container: {
    flex: 1,
    //position:'relative',
    //backgroundColor: Colors_pallete.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
})