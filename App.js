//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Button, TouchableOpacity} from 'react-native';
import LoginScreen from './app/screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import TabNavigation from './app/Navigations/TabNavigation';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import Colors_pallete from './app/constants/Colors_pallete';
import { dark } from '@clerk/themes';

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

// const SignOut = () => {
//   const { isLoaded,signOut } = useAuth();
//   if (!isLoaded) {
//     return null;
//   }
//   return (
//     <View>
//       <Button
//         title="Sign Out"
//         onPress={() => {
//           signOut();
//         }}
//       />
//     </View>
//   );
// };
      
export default function App() {
  return (
    
    <ClerkProvider
      tokenCache={tokenCache} 
      publishableKey={"pk_test_d2VhbHRoeS1sYW1iLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ"}
      appearance={{
        baseTheme: dark
      }}
    >
    
      <SafeAreaView style={styles.container} >
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      </SafeAreaView>
    
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Colors_pallete.PRIMARY,
    justifyContent: 'flex-end',
  },
});
