import React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import { Colors } from '../../Resources/Colors';
import { Fonts } from '../../Resources/Fonts';

const { width } = Dimensions.get('window');
export default styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    headerStyle: {
        height: 86,
        backgroundColor: Colors.serachHeaderBackColor,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        paddingHorizontal:20
    },
    backImg: {
        height: 24,
        width: 24,
        alignSelf:"center"
    },
    closeImg:{
        height: 14,
        width: 14
    },
    serachInput:{
        flex:0.9,
        fontSize:33.25,
        lineHeight:38.97,
        fontWeight:"100"
    },
    txtNoFound:{
        fontSize:24,
        fontWeight:"300",
        lineHeight:28.13,
        color:'#18CA75',
        fontFamily:Fonts.RobotoLight
    }
})