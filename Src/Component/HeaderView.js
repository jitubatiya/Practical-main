import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
const HeaderView = (props) => {
    return (
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" ,margin:20}}>
            <TouchableOpacity onPress={props.onMinus}>
                <Image style={{ height: 30, width: 30 }} resizeMode={"contain"} source={require("../Assets/Images/minus.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onAdd}>
                <Image style={{ height: 30, width: 30 }} resizeMode={"contain"} source={require("../Assets/Images/add.png")} />
            </TouchableOpacity>
        </View>
    )
}
export default HeaderView;