import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import CommonView from '../../Component/CommonView';
import { Images } from '../../Resources/Images';
import Styles from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { dataChange } from '../../Redux/Actions/action';


const Favourites=(props)=>{
    const [userData, setUserData] = useState(props.route.params.userData)
    const dispatch = useDispatch();
    const data = useSelector((store) => store.reducer.data);

    const headerView = () => {
        return (
            <View style={Styles.headerView}>
                <Text style={Styles.txtHeader}>{"Favourites"}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Image source={Images.closeIcon} style={Styles.serachIcon} resizeMode={"contain"} />
                    </TouchableOpacity>
                   
                </View>
            </View>
        )
    }
    const onLikeButton = (index) => {
        const arr = [...userData];
        arr[index].isFav = (arr[index]?.isFav == undefined || arr[index]?.isFav == false) ? true : false
        dispatch(dataChange(arr))
        setUserData(arr.filter(item=>item?.isFav===true?true:false))
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
    const renderEmpty = () => {
        return (
            <View>
                <Text style={Styles.txtNoFound} >{"No Data found"}</Text>

            </View>
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
                ListEmptyComponent={renderEmpty}
                style={{margin:20}}
            />
        </View>
    )
}
export default Favourites;