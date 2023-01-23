import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useQuery } from "react-query";
import { getAsset } from "../snipe-it/api";
import styles from "../Styles";

const AssetScreen = ({ navigation, route }) => {
  //const { id } = useParams<{ id: string }>();
  const [asset, setAsset] = useState({});
  const id = route.params.id;

  useEffect(() => {

    getData();
    /* const { data, status } = useQuery(`asset-${id}`, (id) => getAsset, {
      staleTime: 60 * 10000000, // 10000 minute = around 1 week
      cacheTime: 60 * 10000000,
    }); */
  }, [])
  const getData = async () => {
    const data = await getAsset(id)
    console.log(data)
    setAsset(data)
    console.log(asset)
  } 


  return (
    <View style={styles.container}>
    
      <Text>Asset {asset['asset_tag']}</Text>
      <Button title={'Light it up'}/>
      <StatusBar style="auto" />
    </View>
  );
};

export default AssetScreen;
