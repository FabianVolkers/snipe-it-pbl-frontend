import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../Styles";
import { useState } from "react";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        left={<TextInput.Icon name="magnify" />}
        onChangeText={(value) => setSearchString(value)}
      />
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Button title={'Scan'} onPress={navigator}/> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Search;
