import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    userName: "",
    firstName: "",
    lastName: "",
    error: null,
};

//handle login & data storage
export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            //post email & password to get token in return
            const responseToAuth = await fetch("http://localhost:3001/api/v1/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (!responseToAuth.ok) {
                return rejectWithValue('Email/Password incorrect');
            }
            const token = (await responseToAuth.json()).body.token;
            //post token to get user data in return
            const responseToGetUserData = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });
            if (!responseToGetUserData.ok) {
                return rejectWithValue('Failed to fetch user data');
            }
            const userData = await responseToGetUserData.json();
            return {
                token: token,
                userName: userData.body.userName,
                lastName: userData.body.lastName,
                firstName: userData.body.firstName,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//handle async username update
export const updateUserName = createAsyncThunk(
    'user/userName/update',
    async ({ userName }, { getState, rejectWithValue }) => {
        const state = getState();
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${state.user.token}`
                },
                body: JSON.stringify({ userName })
            });
            if (!response.ok) {
                return rejectWithValue('Failed to update username');
            }
            const data = await response.json();
            return { userName: data.body.userName };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserData: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserName.fulfilled, (state, action) => {
                state.userName = action.payload.userName;
                state.error = null;
            })
            .addCase(updateUserName.rejected, (state, action) => {
                state.error = action.payload || action.error.message;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.userName = action.payload.userName;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload || action.error.message;
            });
    }
});

export const { resetUserData } = userSlice.actions;
export default userSlice.reducer;