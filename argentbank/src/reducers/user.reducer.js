import { RESET_USER_DATA } from "../actions/resetUserData.action";
import { SET_USER_DATA } from "../actions/setUserData.action";
import { STORE_TOKEN } from "../actions/storeToken.action";

const initialState = {
    token: {},
    userName: {},
    firstName: {},
    lastName: {},

};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_TOKEN:
            return { ...state, token: action.payload.token }
        case SET_USER_DATA:
            return {
                ...state,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        case RESET_USER_DATA:
            return initialState;
        default:
            return state;
    }
}