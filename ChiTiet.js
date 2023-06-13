import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
export default function ChiTiet({route, navigation}) {
    var name = route.params.name;
    var content = route.params.content;
    var price = route.params.price;
    var describe = route.params.describe;
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize: 30,color:'#ff14d0'}}>Thông tin chi tiết: </Text>
            <View style={{borderWidth:2 , padding:10, margin:10, borderRadius:10, borderColor:'#22000c'}}>
                <Text style={{fontWeight:'bold'}}>{"HÌNH ẢNH:"}</Text>
                <Image style = {{height:100, width: 170, margin:'auto'}} source ={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIN4GfMKz7Ywg9Hn2TMQaMu8B1-s_P3u0rG8fyeqUQ&s"}}
                />
                <Text style={{fontWeight:'bold'}}>{" TÊN SẢN PHẨM: "+ name}</Text>
                <Text style={{fontWeight:'bold'}}>{" NỘI DUNG: "+ content}</Text>
                <Text style={{fontWeight:'bold'}}>{" GIÁ: "+ price}</Text>
                <Text style={{fontWeight:'bold'}}>{" MÔ TẢ: "+ describe}</Text>


                <Button title={'Thêm vào giỏ hàng'} onPress={() => {
                    navigation.navigate('GioHang',{name: name, content:content,price: price,describe: describe})
                }}>
                </Button>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

