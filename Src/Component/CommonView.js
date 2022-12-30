import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Image, View, Text } from 'react-native';
import { Colors } from '../Resources/Colors';
import { Fonts } from '../Resources/Fonts';
import { Images } from '../Resources/Images';
import { badmanImg1 } from '../Utils/Constant';
const { height, width } = Dimensions.get("window")

const CommonView = (props) => {
    const { item, index, navigation, onLikeCLick } = props
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("DetailPage", { id: item.id,isFav:item?.isFav === undefined || item?.isFav === false?false:true })}
            style={{ flex: 1, marginLeft: index % 2 != 0 ? 15 : 0, marginVertical: 5 }}>
            <Image source={{ uri: item.avatar }} style={styles.imgView} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
                <View>
                    <Text style={styles.nameStyle}>{item.first_name + " " + item.last_name}</Text>
                    <Text style={styles.userName}>{item.email}</Text>
                </View>
                <TouchableOpacity onPress={() => onLikeCLick(index)}>
                    <Image
                        source={(item?.isFav == undefined || item?.isFav == false) ? Images.heart : Images.fillHeart}
                        resizeMode={"contain"} style={styles.heart} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        height: 258,
        width: width / 2
    },
    imgView: {
        height: 210,
        borderRadius: 5
    },
    nameStyle: {
        fontSize: 16,
        fontFamily:Fonts.RobotoBold,
        lineHeight: 18.75,
        color: Colors.white
    },
    userName: {
        fontSize: 10,
        fontWeight: "300",
        lineHeight: 14.41,
        color: Colors.white,
        fontFamily:Fonts.RobotoThin

    },
    heart: {
        width: 22.9,
        height: 20.23
    }
})
export default CommonView;