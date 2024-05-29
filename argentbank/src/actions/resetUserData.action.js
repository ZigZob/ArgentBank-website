export const RESET_USER_DATA = "RESET_USER_DATA"

export const resetUserData = (state) => {
    return (dispatch) => {
        dispatch({ type: RESET_USER_DATA, payload: state })
    }
}