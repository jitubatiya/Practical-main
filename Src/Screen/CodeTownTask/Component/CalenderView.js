import { useEffect } from 'react';
import { ImageBackground, View, TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
import { Images } from '../../../Resources/Images';

const CalenderView=(props)=>{
    const {style}=props
    return(
        <TouchableOpacity style={style}>
            <Text style={styles.txtStyle}>{"Select -"}</Text>
            <Image source={Images.calenderImg} style={styles.calenderImg} resizeMode={"contain"}/>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    calenderImg:{
        height:24,
        width:24,
        tintColor:'#6A7081',
        alignSelf:"center"
    },
    txtStyle:{
        color:'#6A7081',
        fontSize:14,
        lineHeight:21,
        fontWeight:'400',
        textAlign:"center"
    }
})
export default CalenderView;