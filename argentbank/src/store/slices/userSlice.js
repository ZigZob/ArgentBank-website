import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    userName: "",
    firstName: "",
    lastName: "",
};



export const updateUserName = createAsyncThunk(
    'user/updateUserName',
    async ({ userName }, { getState }) => {
        const state = getState();
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.user.token}`
            },
            body: JSON.stringify({ userName })
        });
        if (!response.ok) {
            alert("An error occurred updating your username")
            throw new Error("Failed to update username");
        }
        const data = await response.json();
        console.log(data.body.userName);
        return { userName: data.body.userName };
    }
);

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
    extraReducers: (builder) => {
        builder
            .addCase(updateUserName.fulfilled, (state, action) => {
                state.userName = action.payload.userName;
            })
    }
});

export const { storeToken, setUserData, resetUserData } = userSlice.actions;
export default userSlice.reducer;