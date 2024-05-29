import { createAsyncThunk } from "@reduxjs/toolkit"

export const UPDATE_USERNAME = "UPDATE_USERNAME"

export const updateUserName = createAsyncThunk(
    'user/profile',
    async ({ userName }) => {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName })
        });
        if (!response.ok) {
            alert("An error occurred updating your username")
            throw new Error("Failed to update username");
        }
        const NewuserName = await response.json();
        console.log(NewuserName)
    }
);