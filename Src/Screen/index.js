import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from "../Assets/Resources/Colors";
import { strings } from "../Assets/Resources/Strings";
import CustomTextInput from "../Component/CustomTextInput";
import HeaderView from "../Component/HeaderView";

const Main = () => {
    const [empData, setEmpData] = useState([])
    const [isEyeOn, setIsEyeOn] = useState(true)
    const txtLabel = (text, color) => {
        return (
            <View>
                <Text style={{ color: color }}>{text}</Text>
            </View>
        )
    }
    const onSubmit = (index) => {
        console.log(empData)
    }
    const onChangeTextName = (value, index) => {
        let newArray = [...empData];
        newArray[index].name = value
        newArray[index].Email = newArray[index].Email
        newArray[index].Password = newArray[index].Password

        setEmpData(newArray)

    }
    const onChangeTextEmail = (value, index) => {
        let newArray = [...empData];

        newArray[index].Email = value
        newArray[index].name = newArray[index].name
        newArray[index].Password = newArray[index].Password
        setEmpData(newArray)
    }
    const onChangeTextPassword = (value, index) => {
        let newArray = [...empData];
        newArray[index].Password = value
        newArray[index].Email = newArray[index].Email
        newArray[index].name = newArray[index].name
        setEmpData(newArray)
    }
    const onEyeClick = () => {
        setIsEyeOn(!isEyeOn)
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, marginHorizontal: 15 }}>
                <Text style={{ color: "black", marginVertical: 5 }}>{"Employee Form " + (index + 1)}</Text>
                <CustomTextInput
                    value={item.name}
                    secureTextEntry={false}
                    onChangeText={(value) => onChangeTextName(value, index)}
                    placeHolder={"Name"}
                    style={styles.inputStyle} />
                {txtLabel(item.name.trim().length == 0 ? strings.strNameInvalid : strings.strNameValid, item.name.trim().length == 0 ? colors.red : colors.green)}
                <CustomTextInput
                    secureTextEntry={false}
                    value={item.Email}
                    onChangeText={(value) => onChangeTextEmail(value, index)}
                    placeHolder={"Email"}
                    style={styles.inputStyle} />
                {txtLabel((strings.emailRegrex.test(item.Email.trim()) === false) ? strings.strEmailInvalid : strings.strEmailValid, (strings.emailRegrex.test(item.Email.trim()) === false) ? colors.red : colors.green)}
                <CustomTextInput
                    secureTextEntry={true}
                    isEyeOn={isEyeOn}
                    value={item.Password}
                    onChangeText={(value) => onChangeTextPassword(value, index)}
                    placeHolder={"Password"}
                    onEyeClick={onEyeClick}
                    style={styles.inputStyle} />
                {txtLabel(item.Password.trim().length == 0 ? strings.strPasswordInvalid : strings.strPasswordValid, item.Password.trim().length == 0 ? colors.red : colors.green)}
                <TouchableOpacity onPress={() => onSubmit(index)} style={styles.btnStyle}>
                    <Text style={{ color: "white" }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const onMinus = () => {
        let newArray = [...empData]
        newArray.pop()
        setEmpData(newArray)
    }
    const onAdd = () => {
        let newArray = [...empData]
        let obj = {
            name: "",
            Email: "",
            Password: ""
        }
        newArray.push(obj)
        setEmpData(newArray)
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <HeaderView onMinus={onMinus} onAdd={onAdd} />
            <View style={{ height: 1, width: "100%", backgroundColor: "black", marginBottom: 10 }} />
            <FlatList
                data={empData}
                style={{ flex: 1 }}
                renderItem={renderItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        height: 50, color: "black",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.4)",

    },
    btnStyle: {
        backgroundColor: colors.red,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    }
})
export default Main;