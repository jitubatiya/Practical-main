import React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import { Colors } from '../../Resources/Colors';

const { width } = Dimensions.get('window');
export default styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    headerView: {
        height: 74,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    txtHeader: {
        fontWeight: "700",
        color: '#18CA75',
        fontSize: 23.02,
        lineHeight: 26.98
    },
    serachIcon: {
        height: 14,
        width: 14
    },
    txtNoFound:{
        fontSize:24,
        fontWeight:"300",
        lineHeight:28.13,
        color:'#18CA75'
    }

})