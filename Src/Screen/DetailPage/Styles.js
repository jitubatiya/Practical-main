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
    imgBackgrouund:{
        flex:1,
    },
    headerView: {
        height: 74,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        position:"absolute",
        top:0
    },
    serachIcon: {
        height: 20,
        width: 20
    },
    heartIcon:{
        height:20.23,
        width:22.9
    },
    nameStyle: {
        fontSize: 31.16,
        fontWeight: "700",
        lineHeight: 36.51,
        color: Colors.white,
        textAlign:"center",
        fontFamily:Fonts.RobotoBold
    },
    userName: {
        fontSize: 14,
        fontWeight: "300",
        lineHeight: 16.41,
        color: Colors.white,
        textAlign:"center",
        fontFamily:Fonts.RobotoThin


    },
    imgView: {
        height: 210,
        borderRadius: 5
    },
    transparentView:{ position: "absolute", backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', flex: 1, top: 0, width: "100%" },
    detailView:{ position: "absolute", top: '60%', alignSelf: "center" }
})