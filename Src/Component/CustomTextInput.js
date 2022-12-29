import React from "react";
import { TextInput, View, Image, TouchableOpacity } from 'react-native';

const CustomTextInput = (props) => {
    return (
        <>
            <TextInput
                onChangeText={props.onChangeText} //update state onChange
                focus={true} //initial focus on this TextInput
                style={props.style}
                secureTextEntry={props.isEyeOn}
                placeholderTextColor={"black"}
                placeholder={props.placeHolder} />
            {props.secureTextEntry == true &&
                <TouchableOpacity onPress={props.onEyeClick} style={{ height: 30, width: 30, position: "absolute", bottom: 100, right: 10 }} >
                    <Image style={{ height: 30, width: 30 }}
                        source={props.isEyeOn == true ? require("../Assets/Images/eye.png")
                            : require("../Assets/Images/hidden.png")}
                    />
                </TouchableOpacity>
            }
        </>
    )
}
export default CustomTextInput;