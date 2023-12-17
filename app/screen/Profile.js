import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({signoutcomponent}) => {
  return (
    <View>
      <Text>Profile</Text>
      {signoutcomponent}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})