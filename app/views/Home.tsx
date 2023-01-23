import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import styles from "../Styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title={"Asset 1"}
        onPress={() => navigation.navigate("SearchStack", {
          screen: "Asset",
          params: { id: "1" },
        })}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
