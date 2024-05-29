import { createAsyncThunk } from "@reduxjs/toolkit"

export const GET_USER_DATA = "GET_USER_DATA"

export const getUserData = createAsyncThunk(
    'user/profile',
    async ({ token }) => {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        if (!response.ok) {
            alert("An error occurred fetching your data")
            throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        console.log(userData)
    }
);