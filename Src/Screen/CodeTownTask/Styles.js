import {StyleSheet } from 'react-native';

const Styles=StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'#F4F6F8',
        
    },
    logoStyle:{
        height:32.22,
        width:154,
        alignSelf:"center",
        marginVertical:15
    },
    //label view styles
    labelView:{
        justifyContent:"space-between",
        flexDirection:"row",
        marginHorizontal:20,
        marginVertical:30
    },
    labelText:{
        color:" #00253A",
        fontSize:18,
        lineHeight:27,
        fontWeight:"600"
    },

    //drop view styles
    dropView:{
        backgroundColor:"#EDF1F2",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        paddingHorizontal:15,
        height:50
    },
    arrowStyle:{
        height:12,
        width:12,
        marginHorizontal:10
    },
    //calenderView styles
    calenderView:{
        borderRadius:10,
        height:60,
        backgroundColor:'#EDF1F2',
        flexDirection:"row",
        justifyContent:"space-between",
        flex:0.4,
        alignItems:"center",
        paddingHorizontal:20
    },
    txtTo:{
        fontSize:16,
        lineHeight:24,
        color:'#00253A',
        opacity:0.5,
        textAlign:"center",
        flex:0.2,
        alignSelf:"center"
    }
})
export default Styles;
