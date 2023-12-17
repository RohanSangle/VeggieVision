//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Button} from 'react-native';
import LoginScreen from './app/screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import HomeScreen from './app/screen/HomeScreen';
import * as SecureStore from "expo-secure-store";
import TabNavigation from './app/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    }catch (err) {
      return null;
    }
  },
};

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
      



export default function App() {
  return (
    <>
      <ClerkProvider
        tokenCache={tokenCache} 
        publishableKey={"pk_test_d2VhbHRoeS1sYW1iLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ"}
      >
      <View style={styles.container}>
        <SafeAreaView >
          <SignedIn>
            <NavigationContainer>
              <TabNavigation signoutcomponent={<SignOut/>}/>
            </NavigationContainer>
            
            {/* <SignOut/>                       //need to pass this inside profile section */}
          </SignedIn>

          <SignedOut>
            <LoginScreen/>
          </SignedOut>
        </SafeAreaView>
      </View>
      </ClerkProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDB6C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
