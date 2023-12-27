import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({signoutcomponent}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      {signoutcomponent}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    backgroundColor: '#DDB6C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
})