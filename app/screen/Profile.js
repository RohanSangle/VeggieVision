import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Colors_pallete from '../constants/Colors_pallete'

const SignOut = () => {
  const { isLoaded,signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
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
    <View style={styles.container}>
      <Text>Profile</Text>
      <SignOut/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    backgroundColor: Colors_pallete.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
})