import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import CommonView from '../../Component/CommonView';
import { Images } from '../../Resources/Images';
import { apiCallWithGet } from '../../Utils/Helper';
import Styles from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { dataChange } from '../../Redux/Actions/action';

const Home = (props) => {
    const [userData, setUserData] = useState([])
    const dispatch = useDispatch();
    const data = useSelector((store) => store.reducer.data);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        await apiCallWithGet("users?per_page=20").then(res => {
            try {
                if (res?.data?.length > 0)
                    setUserData(res.data)
            } catch (error) {
            }

        })
    }
    const onLikeButton = (index) => {
        const arr = [...userData];
        arr[index].isFav = (arr[index]?.isFav == undefined || arr[index]?.isFav == false) ? true : false
        dispatch(dataChange(arr))
    }
    const filterData=(item)=>{
        if(item?.isFav===true)
            return true
        else
            return false
    }
    const onBackData=(data)=>{
        console.log("dffssf",data);
        alert(data)
    }
    const headerView = () => {
        return (
            <View style={Styles.headerView}>
                <Text style={Styles.txtHeader}>{"The Breaking bad"}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Serach", { userData: userData,onBackData:onBackData })}>
                        <Image source={Images.serachIcon} style={Styles.serachIcon} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Favourites", { userData: userData.filter(item=>filterData(item)) })}>
                        <Image source={Images.fillHeart} style={[Styles.serachIcon, { marginLeft: 20 }]} resizeMode={"contain"} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const renderView = ({ item, index }) => {
        return (
            <CommonView
                item={item}
                index={index}
                navigation={props.navigation}
                onLikeCLick={onLikeButton}
            />
        )
    }
    return (
        <View style={Styles.mainView}>

            {headerView()}
            <FlatList
                data={userData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={renderView}
                style={{ margin: 20 }}
            />
        </View>
    )
}
export default Home;