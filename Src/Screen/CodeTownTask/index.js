import { useEffect } from 'react';
import { ImageBackground, View, TouchableOpacity, Image, Text } from 'react-native';
import Styles from './Styles';
import { Images } from '../../Resources/Images';
import ModalDropdown from 'react-native-modal-dropdown';
import CalenderView from './Component/CalenderView';


const CodeTownTask = () => {

    return (
        <View style={Styles.mainView}>
            <Image source={Images.invictusLogo} style={Styles.logoStyle} resizeMode={"contain"} />
            <View style={Styles.labelView}>
                <View>
                    <Text style={Styles.labelText}>{"Kajani Exim LLP"}</Text>
                    <Text style={[Styles.labelText, { opacity: 0.5 }]}>{"Profit and losses report"}</Text>
                </View>
                <ModalDropdown
                    options={['This year', 'This month', 'This Week']}
                    defaultValue={"This year"}
                    style={Styles.dropView}
                    onSelect={(index) => { }}
                    dropdownStyle={{
                        width: 300,
                    }}
                    //   dropdownTextStyle={styles.dropdown}
                    // textStyle={styles.txtStyle}
                    dropdownTextHighlightStyle={{
                        color: 'blue'
                    }}
                    renderRightComponent={() => {
                        return (
                            <Image source={Images.arrowDown} style={Styles.arrowStyle} resizeMode={"contain"} />
                        )
                    }}
                />
               
            </View>
            <View style={{flexDirection:"row",marginHorizontal:20}}>
                <CalenderView
                    style={Styles.calenderView}
                />
                <Text style={Styles.txtTo}>To</Text>
                <CalenderView
                    style={Styles.calenderView}
                />
                </View>
        </View>
    )
}
export default CodeTownTask;
