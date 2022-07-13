import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import { Searchbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../Common/loader";

const Home = () => {
    const [userList, setUserList] = useState([])
    const [userFilterList, setUserFilterList] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const reducerData = useSelector(state => state.HomeReducer);
    // console.log("Reducer response", reducerData.userResponse)

    useEffect(() => {
        setUserList(reducerData.userResponse)
        setUserFilterList(reducerData.userResponse)
    }, [])


    const onChangeSearch = (text) => {
        if (text) {
            //console.log("text")
            const newData = userFilterList.filter(function (item) {
                const itemData = item.first_name
                    ? item.first_name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            //  console.log(newData)
            setUserList(newData);
            setSearchQuery(text);
        } else {
            // console.log("blank")

            setUserList(userFilterList);
            setSearchQuery(text);
        }
    };


    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={style.mainContainer}>
                <Searchbar
                    placeholder="Search here"
                    onChangeText={(text) => onChangeSearch(text)}
                    value={searchQuery}
                />
                <Loader loading={reducerData.isLoading} />
                <FlatList
                    data={userList}
                    renderItem={({ item, index }) => (
                        <View style={style.cardView} key={index}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={style.imageStyle}
                            />
                            <View style={style.textView}>
                                <Text style={style.textStyle}>{item.first_name} </Text>
                                <Text style={style.textStyle}> {item.last_name}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row'
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10
    },
    textView: {
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 5
    },
    textStyle: {
        color: 'black',
        fontSize: 18
    }
})

export default Home;