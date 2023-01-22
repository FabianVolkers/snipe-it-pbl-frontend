import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/views/Home'
import AssetScreen from './app/views/AssetView';
/* import ScanScreen from './app/views/CameraView' */

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Snipe-lIghT' }}
          />
    <Stack.Screen 
            name="Asset"
            component={AssetScreen}
          />
{/*      <Stack.Screen
            name="Scan"
            component={ScanScreen}
          /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
/*   return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
