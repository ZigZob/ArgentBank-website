export const SET_USER_DATA = "SET_USER_DATA"

export const setUserData = (state) => {
    return (dispatch) => {
        dispatch({ type: SET_USER_DATA, payload: state })
    }
}