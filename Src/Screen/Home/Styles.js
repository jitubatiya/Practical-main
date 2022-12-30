import React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import { Colors } from '../../Resources/Colors';
import { Fonts } from '../../Resources/Fonts';

const { width } = Dimensions.get('window');
export default styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.backgroundColor
    },
    headerView:{
        height:74,
        width:"100%",
        padding:20,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center"
    },
    txtHeader:{
        color:Colors.white,
        fontSize:23.02,
        lineHeight:26.98,
        fontFamily:Fonts.RobotoBold
    },
    serachIcon:{
        height:20,
        width:20
    }
})