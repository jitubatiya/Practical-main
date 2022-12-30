import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, FlatList, Text } from 'react-native';
import CommonView from '../../Component/CommonView';
import { Images } from '../../Resources/Images';
import Styles from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { dataChange } from '../../Redux/Actions/action';


const Serach = (props) => {
    const [serachText, setSerachText] = useState("")
    const [userData, setUserData] = useState(props.route.params.userData)
    const [filterData, setFilterData] = useState(props.route.params.userData)
    const dispatch = useDispatch();
    const data = useSelector((store) => store.reducer.data);
    const onChangeText = (text) => {
        setSerachText(text)
        setFilterData(userData.filter((item) => filterValue(item, text)))
    }
    function filterValue(data, text) {
        return data.first_name.includes(text) || data.last_name.includes(text)
    }
    const onClose = () => {
        setSerachText("")
        setFilterData(props.route.params.userData)
    }
    const headerView = () => {
        return (
            <View style={Styles.headerStyle}>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => props.navigation.goBack(null)}>
                        <Image style={Styles.backImg} resizeMode={"contain"} source={Images.arrowLeft} />
                    </TouchableOpacity>
                    <TextInput
                        style={Styles.serachInput}
                        onChangeText={onChangeText}
                        value={serachText}
                    />
                </View>
                <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => onClose()}>
                    <Image style={Styles.closeImg} resizeMode={"contain"} source={Images.closeIcon} />
                </TouchableOpacity>

            </View>
        )
    }
    const onLikeButton = (index) => {
        const arr = [...filterData];
        arr[index].isFav = (arr[index]?.isFav == undefined || arr[index]?.isFav == false) ? true : false
        dispatch(dataChange(arr))
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
                <Text style={Styles.txtNoFound} >{"No character found"}</Text>
                <Text style={[Styles.txtNoFound, { color: '#C4C4C4' }]} >{"Try again"}</Text>

            </View>
        )
    }
    return (
        <View style={Styles.mainView}>
            {headerView()}
            <FlatList
                data={filterData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={renderView}
                style={{ margin: 20 }}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    )
}
export default Serach;