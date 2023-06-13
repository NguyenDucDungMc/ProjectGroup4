import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home";
import ChiTiet from "./ChiTiet";
import GioHang from "./GioHang";
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"//hang so
                    component={Home}//file man hinh
                    options={{title: 'Welcome to Group 4'}}//cac thong tin tuy chon man hinh
                    //tieu de
                />
                <Stack.Screen
                    name="ChiTiet" component={ChiTiet} />
                <Stack.Screen
                    name="GioHang" component={GioHang} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;