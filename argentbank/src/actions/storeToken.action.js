
export const STORE_TOKEN = "STORE_TOKEN"

export const storeToken = (state) => {
    return (dispatch) => {
        dispatch({ type: STORE_TOKEN, payload: state })
    }
}