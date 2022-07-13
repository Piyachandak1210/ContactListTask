import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
} from 'react-native'
import { Searchbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../Redux/Actions/HomeAction";

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();


    const reducerData = useSelector(state => state.HomeReducer);
    // console.log("Reducer response", reducerData.userResponse)

    const onPress = () => {
        dispatch(getUserList(navigation))
       
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={style.container}>
                <TouchableOpacity
                style={style.button}
                    onPress={() => onPress()}
                >
                    <Text style={style.textStyle}>Display User List</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style =StyleSheet.create({
    mainContainer:{
        flex:1
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'red',
        padding:10,
        borderRadius:10
    },
    textStyle:{
        padding:10,
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    }
})
export default MainScreen;