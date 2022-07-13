import { GETUSERS_SUCCESS, GETUSERS_FAIL, GETUSERS_PROGRESS } from "../actionConstants";

const initalState = {
    isLoading: false,
    userResponse: []
}

const HomeReducer = (state = initalState, action) => {
   // console.log("HomeReducer", action)
    switch (action.type) {
        case GETUSERS_PROGRESS:
            return {
                ...state,
                isLoading: true
            };
        case GETUSERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userResponse: action.payload
            };
        case GETUSERS_FAIL:
            return {
                ...state,
                isLoading: false,
                userResponse: action.payload
            }
        default:
            return state;
    }
}
export default HomeReducer