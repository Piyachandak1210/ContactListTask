import RestUtil from "../../Src/Util/restUtils";
import { URL } from "../../Src/Util/Config";
import { GETUSERS_SUCCESS, GETUSERS_FAIL, GETUSERS_PROGRESS } from "../actionConstants";

export function getUserList(navigation) {
    return (dispatch) => {
        dispatch(homeDispatch({}, GETUSERS_PROGRESS))
        RestUtil(URL.GETUSER, {})
            .then((response) => response.json())
            .then((responseData) => {
                //console.log("getUserList", responseData)
                dispatch(homeDispatch(responseData.data, GETUSERS_SUCCESS))
                navigation.navigate('Home')
            }).catch((error) => {
                console.log("getUserList error", error);
                dispatch(homeDispatch(error, GETUSERS_FAIL))
            });
    }
}

const homeDispatch = (data, actionType) => {
    return {
        payload: data,
        type: actionType
    }
}