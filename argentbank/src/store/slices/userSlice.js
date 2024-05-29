import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: {},
    userName: {},
    firstName: {},
    lastName: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeToken: (state, action) => {
            state.token = action.payload.token;
        },
        setUserData: (state, action) => {
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        resetUserData: () => initialState,
    },
});

export const { storeToken, setUserData, resetUserData } = userSlice.actions;
export default userSlice.reducer;