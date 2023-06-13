import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View,Image,Button} from 'react-native';
import {useEffect, useState} from "react";
export default function Home({navigation}) {
  const [dulieu, setDuLieu] = useState();
  useEffect(() =>{
  fetch('http://192.168.0.102:3000/api/users')
      .then(response => response.json())
      .then(data =>{setDuLieu(data.data)})
},[])
  return (
    <View style={styles.container}>
        <Text style = {{textAlign:'center', fontSize:40, fontWeight:'bold', color:'#47ff14'}}>ShopGroup4</Text>
    <FlatList data={dulieu} numColumns={0} renderItem={({item}) =>{ return(
        <View style ={{borderWidth:2 , padding:10, margin:10, borderRadius:10, borderColor:'#005'}}>
            <Image style = {{height:100, width: 170, margin:'auto'}} source ={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIN4GfMKz7Ywg9Hn2TMQaMu8B1-s_P3u0rG8fyeqUQ&s"}}
          />

          <Text>
            Name: {item.name}
          </Text>
          <Text>
            Content: {item.content}
          </Text>
          <Text>
            Price: {item.price}
          </Text>
          {/*<Text>*/}
          {/*  Describe: {item.describe}*/}
          {/*</Text>*/}
            <Button title={'Chi Tiết'} onPress={()=>{
            navigation.navigate('ChiTiet',{
                name: item.name, content: item.content,
                price: item.price,describe: item.describe
            })

            }}/>
            <StatusBar style="auto" />

        </View>

    )}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

