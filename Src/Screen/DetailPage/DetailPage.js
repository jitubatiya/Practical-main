import React, { useEffect, useState } from 'react';
import { ImageBackground, View, TouchableOpacity, Image, Text } from 'react-native';
import { Images } from '../../Resources/Images';
import { apiCallWithGet } from '../../Utils/Helper';
import Styles from './Styles';


const DetailPage = (props) => {
    const [id, setId] = useState(props.route.params.id)
    const [isFav] = useState(props.route.params.isFav)
    const [userDetail, setUserDetail] = useState("")

    useEffect(() => {
        getUserDetail();
    }, [])
    const getUserDetail = async () => {
        await apiCallWithGet("users/" + id).then(res => {
            try {
                setUserDetail(res?.data)
            } catch (error) {
            }

        })
    }
    const headerView = () => {
        return (
            <View style={Styles.headerView}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={Images.arrowLeft} style={Styles.serachIcon} resizeMode={"contain"} />
                </TouchableOpacity>
                <Image source={ isFav===true?Images.fillHeart:Images.heart} style={Styles.heartIcon} resizeMode={"contain"} />
            </View>
        )
    }
    const userDetailView = () => {
        return (
            <View style={Styles.detailView}>
                <Image source={{ uri: userDetail.avatar }} style={Styles.imgView} />
                <View style={{ alignSelf: "center" }}>
                    <Text style={Styles.nameStyle}>{userDetail.first_name + " " + userDetail.last_name}</Text>
                    <Text style={Styles.userName}>{userDetail.email}</Text>
                </View>

            </View>
        )
    }
    return (
        <View style={Styles.mainView}>
            <ImageBackground
                source={{ uri: userDetail?.avatar }}
                style={Styles.imgBackgrouund}
            >

            </ImageBackground>
            <View style={Styles.transparentView} />
            {headerView()}
            {userDetailView()}
        </View>
    )
}
export default DetailPage;