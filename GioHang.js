import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import {useState} from "react";
export default function GioHang({route}) {
    const [count,setCount] = useState(1);
     var name = route.params.name;
    var content = route.params.content;
    var price = route.params.price;
    var describe = route.params.describe;
    return (
        <View style={styles.container}>
            <View style={{borderWidth:2 , padding:10, margin:10, borderRadius:10, borderColor:'#22000c'}}>
                <Text style={{fontWeight:'bold'}}>{"GIỎ HÀNG CỦA BẠN :"}</Text>
                <Image style = {{height:100, width: 170, margin:'auto'}} source ={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIN4GfMKz7Ywg9Hn2TMQaMu8B1-s_P3u0rG8fyeqUQ&s"}}
                />
                <Text style={{fontWeight:'bold',textAlign:'center'}}>{name}</Text>
                {/*<Text style={{fontWeight:'bold'}}>{" NỘI DUNG: "+ content}</Text>*/}
                <Text style={{fontWeight:'bold',textAlign:'center'}}>{" GIÁ: "+ price}</Text>
                {/*<Text style={{fontWeight:'bold'}}>{" MÔ TẢ: "+ describe}</Text>*/}
                <Button title={'+'} onPress={() => setCount(count+1)
                }>
                </Button>
                <Button title={'-'} onPress={() => setCount(count-1)
                }>
                </Button>
                <Text style={{fontWeight:'bold'}}>Bạn mua {count} sản phẩm ?</Text>

                <Button title={'Đặt hàng'} onPress={() => {
                    alert('Đặt hàng thành công')
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

