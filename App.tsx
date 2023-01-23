import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";

import AssetScreen from "./app/views/AssetView";
import Home from "./app/views/Home";
import Search from "./app/views/Search";

/* import ScanScreen from './app/views/CameraView' */

const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const config = {
  screens: {
    Home: "",
    Camera: "scan",
    Asset: "asset/:id",
  },
};

const linking = {
  prefixes: ["https://snipe-light.com", "snipe-light://", "https://fabianvolkers-special-chainsaw-q9v9r7g4j6p3xvj7-19006.preview.app.github.dev/"],
  config,
};

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      {/* <SearchStack.Screen name="Scan" component={Scan}/> */}
      <SearchStack.Screen name="Asset" component={AssetScreen} />
    </SearchStack.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Snipe-lIghT" }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStackScreen}
          options={{ title: "Search" }}
        />
      </Tab.Navigator>

      {/*      <Tab.Screen
            name="Scan"
            component={ScanScreen}
          /> */}
    </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
